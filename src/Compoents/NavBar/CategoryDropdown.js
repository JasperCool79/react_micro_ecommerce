import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { MenuItem, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { URL } from '../api';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 10
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    }

}));
  
function CategoryDropdown() {
  const { menuButton,root} = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categories, setCategories] = React.useState([]);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  React.useEffect(() => {
    axios.get(`${URL}/get_categories`).then(({ data }) => {
      let category_data = data.data;
      setCategories(category_data);
    })
  },[])

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={root}>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        color="inherit"
        className={menuButton}
      >
        Products
        <ExpandMoreIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {
          categories.map(({ id, name }) => <MenuItem key={id} onClick={handleClose}>{name}</MenuItem>)
        }
        
      </Menu>
    </div>
  );
}

export default CategoryDropdown;