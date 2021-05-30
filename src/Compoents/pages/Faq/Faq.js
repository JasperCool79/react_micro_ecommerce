import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import {Pageview,Forward,ArrowForward,AddShoppingCart,LocalShipping} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function idProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 20
  },
}));

export default function Faq() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Grid container style={{paddingBottom: 10}}>
            <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                      <Grid item>
                      <Typography variant="h4">Documentation For User</Typography>
                      </Grid>
                </Grid>
            </Grid>
        </Grid>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="View Products" icon={<Pageview />} {...idProps(0)} />
          <Tab label="Order Products" icon={<ShoppingBasket />} {...idProps(1)} />
          <Tab label="Track Ordes & Find Product" icon={<LocalShipping />} {...idProps(2)} />
          <Tab label="Contact & Payment Proof" icon={<HelpIcon />} {...idProps(3)} />
          <Tab label="Account" icon={<PersonPinIcon />} {...idProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            <span style={{color: 'blue'}}>NEW ARRIVALS</span>&nbsp;ခေါင်းစဉ်အောက်တွင် အသစ်ရောက်ရှိလာသော ပစ္စည်းများအား ကြည့်ရှု့ဝယ်ယူနိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            <span style={{color: 'blue'}}>BESTSELLING PRODUCTS</span>&nbsp;ခေါင်းစဉ်အောက်တွင် အရောင်းရဆုံးထိန်တန်းမှ ပစ္စည်းများအား ကြည့်ရှု့ဝယ်ယူနိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            <span style={{color: 'blue'}}>POPULAR PRODUCTS</span>&nbsp;ခေါင်းစဉ်အောက်တွင် လူကြည့်များသော/ပေါ်ပျူလာဖြစ်သော ပစ္စည်းများအား ကြည့်ရှု့ဝယ်ယူနိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Menu Bar(အပေါ်ဘားတန်း)ရှိ <span style={{color: 'blue'}}>Categories</span>&nbsp;ခေါင်းစဉ်အောက်တွင် ရှိသော Category Name အမျိုးအစားဂရုတစ်ခုခြင်းအလိုက်
            ပစ္စည်းများအား ကြည့်ရှု့ဝယ်ယူနိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Product(ကုန်ပစ္စည်း)တစ်ခုကို အသေးစိတ်ကြည့်နိုင်ရန်အတွက် ၎င်းအပေါ်တွင်ရှိသော<span style={{color: 'blue'}}> View </span>&nbsp;ခလုတ်ကိုနှိပ်၍ ကြည့်ရှု့နိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Product(ကုန်ပစ္စည်း)တစ်ခုကို အသေးစိတ်ကြည့်နိုင်ရန်နေရာတွင်
            <br/>
            <ArrowForward fontSize="small" color="action"/> Product အတွက် ဓါတ်ပုံများအား ရွေးချယ်ကြည့်နိုင်ခြင်း
            <br/>
            <ArrowForward fontSize="small" color="action"/> Product အတွက် ဈေးနှုန်း/အမည်/ကုတ်နံပါတ် များကြည့်ရှု့နိုင်ပါသည်
            <br/>
            <ArrowForward fontSize="small" color="action"/> Product အတွက် အသေးစိတ်ကြည့်ရှု့ရာတွင် လက်လီဈေး/လက်ကားဈေး ဖော်ပြထားခြင်း
            <br/>
            <ArrowForward fontSize="small" color="action"/> Product အတွက် အသေးစိတ်ကြည့်ရှု့ရာတွင် Instock/PreOrder ဖော်ပြထားခြင်း
            <br/>
            <ArrowForward fontSize="small" color="action"/> Product ဓါတ်ပုံအောက်တွင် အသေးစိတ်ဖော်ပြချက်(Description)နဲ့အတူ Product ရွေးချယ်ဝယ်ယူနိုင်သော (Additional information)များအား
            ကြည့်ရှု့နိုင်ပါသည်။ ထို့အပြင် Review နေရာတွင် မိမိတို့ရဲ့ Feedback များအား Comment အဖြစ်ချန်ထားခဲ့နိုင်ပါသည်။
            <br/>
            <ArrowForward fontSize="small" color="action"/> ယခု Product နဲ့ဆက်စပ်နေသော ပစ္စည်းများအား အောက်ဆုံးတွင် အသေးစိတ်ကြည့်ရှု့နိုင်ပါသည်
        </Typography>
                
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Product(ကုန်ပစ္စည်း)တစ်ခုကို အသေးစိတ်ကြည့်နိုင်သောနေရာမှ <span style={{color: 'blue'}}>Add To Cart</span>&nbsp;ခလုတ်ကိုနှိပ်၍ ဈေးဝယ်ခြင်းထဲသို့ထည့်နိုင်ပါသည်။ဈေးခြင်းထဲသို့ထည့်ပြီးပါက
            ထိပ်ဆုံးဘားတန်း(Menu Bar) ပေါ်ရှိ ဈေးဝယ်ခြင်းတောင်းဘေးတွင် မိမိထည့်ထားသော အရေအတွက်ကို ပြထားမည်ဖြစ်သည်။
            ထို့နောက် အခြားပစ္စည်းများကြည့်ရှု့ခြင်း ၊ ဈေးခြင်းထဲသို့ထည့်ခြင်း ထပ်ကာထပ်ကာ လုပ်ဆောင်နိုင်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မိမိစိတ်ကြိုက်ပစ္စည်းများ ဈေးခြင်းထဲသို့ထည့်ပြီးပါက Order မှာယူရန်အတွက် ထိပ်ဆုံးဘားတန်း(Menu Bar) ပေါ်ရှိ ဈေးဝယ်ခြင်းတောင်းပုံ <AddShoppingCart fontSize="small" color="primary"/>
            ဈေးခြင်းထဲသို့ ထည့်သွင်းထားသော ကုန်ပစ္စည်းများအားလုံး တွေ့ရမည်ဖြစ်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            အရေအတွက်လျော့လိုပါက <span style={{color: 'blue'}}>QUANTITY</span> ခေါင်းစဉ်အောက်မှ အနှုတ်(-)ကိုနှိပ်ရမှာဖြစ်ပြီး
            <br/>
            အရေအတွက်တိုးလိုပါက <span style={{color: 'blue'}}>QUANTITY</span> ခေါင်းစဉ်အောက်မှ အပေါင်း(+)ကိုနှိပ်ရမှာဖြစ်ပါသည်
            <br/>
            ပစ္စည်းအား ဈေးခြင်းထဲမှ လုံးဝ ဖယ်ရှားလိုပါက  <span style={{color: 'blue'}}>PRODUCT</span> ခေါင်းစဉ်အောက်မှ ဓါတ်ပုံပေါ်တွင် <span style={{color: 'red'}}>X</span>ကိုနှိပ်ရမှာဖြစ်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            လိုအပ်သောအချက်လက် နှင့် အမည် ၊ ဖုန်းနံပါတ် ၊ ပေးပို့ရမည့် လိပ်စာတို့ကို ထည့်သွင်းပြီး <span style={{color: 'green'}}>Order Now</span> အား နှိပ်လိုက်ပါက
            ဈေးခြင်းထဲသို့ ထည့်သွင်းထားသော ကုန်ပစ္စည်းများအားလုံး အော်ဒါမှာယူခြင်းအောင်မြင်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            အကောင့်ပြုလုပ်ပြီး အော်ဒါမှာခြင်းမဟုတ်ပါက  <span style={{color: 'green'}}>Order Now</span> အား နှိပ်လိုက်ပြီး
            <span style={{color: 'yellowgreen'}}>Order Id ဟူသော အော်ဒါနံပါတ်ဖော်ပြထားမည်ဖြစ်ပြီး </span> ၎င်းအော်ဒါနံပါတ်ကို မှတ်သားထားရန်လိုအပ်ပါသည်
            <br/>
            ၎င်းအော်ဒါနံပါတ်အား မှားထားမှသာ မှာယူထားသော ပစ္စည်းများအား ကြည့်ရှု့ခြင်း ၊ Delivery အခြေနေကြည့်ခြင်းများ ပြုလုပ်နိုင်မည်ဖြစ်သည်။
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Product(ကုန်ပစ္စည်း)တစ်ခုကို ကုတ်နံပါတ်ဖြင့်ရှာဖွေရန်အတွက် Website အောက်ဆုံးတွင် ရှိသော
            <span style={{color: 'blue'}}>HELP</span>&nbsp;ခေါင်းစဉ်အောက်တွင် ရှိသော
            <span style={{color: 'green'}}>Find Product Code</span> အား နှိပ်ပါ
            <br/>
            ထို့နောက် Product တစ်ခု၏ Product Code အား ထည့်သွင်းပြီး ရှာဖွေနိုင်မည်ဖြစ်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မှာယူထားသော အော်ဒါအား ရှာဖွေရန်အတွက် Website အောက်ဆုံးတွင် ရှိသော
            <span style={{color: 'blue'}}>HELP</span>&nbsp;ခေါင်းစဉ်အောက်တွင် ရှိသော
            <span style={{color: 'green'}}>Track Order</span> အား နှိပ်ပါ
            <br/>
            ထို့နောက် အော်ဒါ တစ်ခု၏ အော်ဒါနံပါတ် အား ထည့်သွင်းပြီး ရှာဖွေနိုင်မည်ဖြစ်ပါသည်
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            ကျွန်ုပ်တို့အားဆက်သွယ်ရန်အတွက် Webstie ၏ အပေါ်ဆုံးဘား(Menu Bar)တွင်ရှိသော
            <span style={{color : 'blue'}}>Contact</span>&nbsp;ခလုတ်အားနှိပ်ပြီး ဆက်သွယ်နိုင်ပါသည်။
            <br/>
            Website တွင် ဖော်ပြထားသော Phone,Email,Facebook နှင့် Messenger ပုံများအား နှိပ်ပြီး တိုက်ရိုက်ဆက်သွယ်နိုင်ပါသည်
            <br/>
            <Forward fontSize="small" color="secondary"/>
            Webstie ၏ အောက်ဆုံးရှိညာဘက်ထောင့်တွင်ရှိသော <span style={{color: 'green'}}>Messenger</span>ပုံအား
            နှိပ်ပြီး လျင်မြန်စွာ ဆက်သွယ် နိုင်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            Payment Proof(ငွေပေးချေမှု့သက်သေများ)ပေးပို့ရန်အတွက် Webstie ၏ အပေါ်ဆုံးဘား(Menu Bar)တွင်ရှိသော
            <span style={{color : 'blue'}}>Send Proof</span>&nbsp;ခလုတ်အားနှိပ်ပြီး နှိပ်ပါ
            <br/>
            ပထမဆုံးအကွက်တွင် အော်ဒါနံပါတ်အားထည့်သွင်းပါ
            <br/>
            ဒုတိယအကွက်တွင် သင်၏အမည်အားထည့်သွင်းပါ
            <br/>
            တတိယအကွက်တွင် သင့်အားဆက်သွယ်ရမည့် ဖုန်းနံပါတ်အား ထည့်သွင်းပါ
            <br/>
            စတုတ္ထအကွက်တွင် သင့်အားဆက်သွယ်ရမည့် လိပ်စာအား ထည့်သွင်းပါ
            <br/>
            ပဉ္စမနေရာတွင် ငွေလွှဲပီးကြောင်း သက်သေ ScreenShoot ဓါတ်ပုံထည့်သွင်းပါ
            <br/>
            နောက်ဆုံးအကွက်တွင် အခြားပြောကြားလိုသော အကြောင်းအရာများအား ထည့်သွင်းပါ

            လိုအပ်သော အချက်လက်များထည့်သွင်းပြီးပါက <span style={{color: 'green'}}>Send</span> ခလုတ်အားနှိပ်ပြီး ပေးပို့ နိုင်ပါသည်။
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            အကောင့်သစ်ပြုလုပ်ရန် Website ထိပ်ဆုံး (Menu Bar)အပေါ် မှ
            <span style={{color: 'blue'}}>Login</span>&nbsp;သို့မဟုတ် <span style={{color: 'blue'}}>Register</span> ကိုနှိပ်ပါ
            <br/>
            Website တွင် Email,Facebook တို့ကို သုံးပြီး အကောင့်သစ်ပြုလုပ်နိုင်ပါသည်။
            <br/>
            Facebook ကို သုံးပြီး အကောင့်သစ်ပြုလုပ်ရသော်လည်း မိမိတို့၏ Facebook Name နှင့် Eamil ကိုသာ အသုံးပြုမည်ဖြစ်ပြီး Password အား
            အသုံးပြုမည်မဟုတ်ပါ။ Facebook မှလည် အသုံးပြုခွင့်လုံး၀ပေးမထားပါ။ ထို့ကြောင့် မိမိတို့ Password သည် မိမိတို့ကိုယ်တိုင်မှလွဲ၍ မည်သူတစ်ဉီးတစ်ယောက်မှ
            သိရှိနိုင်မည်မဟုတ်ပါ။ Website ပိုင်ရှင်နှင့် Website ဖန်းတီး Programmer ကိုယ်တိုင်ပင်လျှင် လူကြီးမင်းတို့၏ Password ကြည့်ရှု့နိုင်ခြင်း ၊ သိရှိနိုင်ခြင်း
            လုံး၀(လုံးဝ)မရှိပါ။ ယုံကြည်စိတ်ချစွာ အကောင့်အသစ်ဖွင့် အသုံးပြုနိုင်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မိမိအကောင့်အချက်လက်များအား ကြည့်ရန်အတွက် Website ထိပ်ဆုံး (Menu Bar)အပေါ် မှ
            <span style={{color: 'blue'}}>သင့်၏အမည်</span> ကိုနှိပ်ပါ
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မိမိအကောင့်အချက်လက်များအား ပြင်ဆင်လိုပါက
            <span style={{color: 'blue'}}>Edit Profile</span> နေရာတွင်
            အမည် ၊ အီးမေး ၊ ဖုန်းနံပါတ် ၊ လိပ်စာ ၊ ဖရိုဖိုင်ဓါတ်ပုံတို့ကို ထည့်သွင်းပြင်ဆင်နိုင်ပါသည်
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မိမိအကောင့် Password ပြင်ဆင်လိုပါက
            <span style={{color: 'blue'}}>Change Password</span> နေရာတွင်
            ပထမဆုံးအကွက်တွင် Password အဟောင်းထည့် ပြီး ဒုတိယနှင့်တတိယအကွက်များတွင် Password အသစ်ထည့်သွင်းပြီး ပြောင်းလဲနိုင်ပါသည်။
        </Typography>
        <Typography>
            <Forward fontSize="small" color="secondary"/>
            မိမိမှာယူထားသော အော်ဒါများအား ကြည့်ရန်အတွက်
            <span style={{color: 'green'}}>View My Order</span> ကိုနှိပ်ပါ
            <br/>
            အော်ဒါ နံပါတ်နှင့်တကွ ဖော်ပြထားပါသည်
            <br/>
            အော်ဒါတစ်ခုချင်း အသေးစိတ်ပြန်လည်ကြည့်လိုပါက နောက်ဆုံးတွင်ရှိသော
            <span style={{color: 'green'}}>View</span>  ခေါင်းစဉ်အောက်မှ
            <span style={{color: 'green'}}>View Details</span> ခလုတ်အား နှိပ်၍ ကြည့်နိုင်ပါသည်။
        </Typography>
      </TabPanel>
    </div>
  );
}