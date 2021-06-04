import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import CartContext from '../../../../CartContex'
import {URL} from '../../../api';
import axios from 'axios';
import Swa from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(Swa);

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping address','Order Infomations'];

function getStepContent(step,data,total,setUserInfo,handleNext,userInfo) {
  switch (step) {
    case 0:
      return <AddressForm setUserInfo={setUserInfo} handleNext={handleNext}/>;
    case 1:
      return <Review products={data} total={total} userInfo={userInfo}/>;
    default:
      throw new Error('Unknown step');
  }
}

let orderId = '';
export default function Checkout({checkoutData,total}) {
  const classes = useStyles();
  const { cart,setCart} = useContext(CartContext);
  let daa = cart !== '' && JSON.parse(cart);
  const data = checkoutData;
  const [activeStep, setActiveStep] = React.useState(0);
  const [userInfo, setUserInfo] = React.useState({});
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const storeOrder = (e) => {
    e.preventDefault();
    axios.post(`${URL}/store_order`, {
      "user_name": userInfo.user_name,
      "email": userInfo.email,
      "phone": userInfo.phone,
      "address": userInfo.address,
      "total_cost": total
    }).then(({data}) => {
      orderId = data.data;
      
    }).catch(err => console.log(err))
    Swal.fire(
      'Success!',
      'Product Quantity Increase Successfully!',
      'success'
    );
    handleNext();
    
  }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
    return (     
    
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is {`# ${orderId}`}. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>                  
                {getStepContent(activeStep,data,total,setUserInfo,handleNext,userInfo)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                    )}
                    {
                      activeStep === steps.length - 1 &&
                      <Button
                        disabled={daa ? (Object.keys(daa).length >0 ? false : true ): false}
                        variant="contained"
                        color="primary"
                        onClick={storeOrder}
                        className={classes.button}
                      >
                        Place order
                      </Button>
                    }
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
    </main>
  );
}