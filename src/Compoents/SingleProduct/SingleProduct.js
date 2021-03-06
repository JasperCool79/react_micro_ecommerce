import { Button, FormControl, MenuItem, Select } from '@material-ui/core';
import React,{useState,useContext} from 'react'
import './SingleProduct.css';
import Size from './Size';
import ColorChoise from './Color';
import {Link} from 'react-router-dom'
import { AddShoppingCart, Pageview } from '@material-ui/icons';
import CartContext from '../../CartContex'

export default function SingleProduct({ id, title, description, price, img, options,name }) {
    const {cart,setCart} = useContext(CartContext);
    const opt = { ...options };
    let arr = [];
    let intialSize = [];
    let intialColor = [];
    for (var key in opt) {
        if (opt[key] !== null) {
        arr[key] = opt[key];
        }
    }
    if (arr['Color'] !== undefined) {
        intialColor = arr['Color'];
    }
    if (arr['Size'] !== undefined) {
        intialSize = arr['Size'];
    }
    const [size, setSize] = useState(intialSize.length > 0 ? intialSize[0] : '');
    const [color, setColor] = useState(intialColor.length> 0 ? intialColor[0] : '');
    const selectSizeClassName = (value) => size === value ? "active" : "color";
    const selectColorClassName = (value) => color === value ? "active" : "";
    const changeSize = (newSize) => {
        setSize(newSize);
    }
    const changeColor = (newColor) => {
        setColor(newColor);
        console.log(newColor);
    }
    
    return (
        <div className="container">
            <div className="image">
                <img src={img} alt={title}/>
            </div>
            <div className="card-content">
                <div className="wrapper">
                    <div className="title">
                        {/* {title.substr(0,10)} */}
                        {name}
                    </div>
                    <p>
                        {description.substr(0,70)}
                    </p>
                    <span className="price">MMK {new Intl.NumberFormat('en-IN').format(price)}</span>
                    <div className="content size">
                        
                        {
                            intialSize.length > 0 && <>
                                <div className="name size-name">
                                    Size
                                </div>
                                <div className="size-value">
                                    {
                                        intialSize.map((size,index)=> <Size key={index} text={size} selectClassName={selectSizeClassName} onActive={changeSize}/>)
                                            
                                    }
                                </div>
                            </>
                        }
                    </div>
                    <div className="content colour">
                        {
                            intialColor.length > 0 && <>
                                <div className="name colour-name">
                                    Colour
                                </div>
                                <div className="colour-value">
                                    {
                                        intialColor.map((color,index)=> <ColorChoise key={index} text={color} selectClassName={selectColorClassName} onActive={changeColor} />)
                                    }
                                </div>
                            </>
                        }
                    </div>
                    <div className="btns">
                        <Button component={Link}
                            to={{
                                pathname: "/product/"+id,
                                replace: true
                            }}
                            className="button" variant="contained" color="primary" startIcon={<Pageview />}>
                            View
                        </Button>
                        <Button onClick={()=> setCart({'type': 'ADD','payload': {'id':id,'name': title,'price': price,'image': img,'quantity': 1}})} style={{marginRight: 150}} variant="contained" color="primary" startIcon={<AddShoppingCart />}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
