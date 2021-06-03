import React,{useState,useRef,useEffect} from 'react';
import DetailThumb from './DetailThumb';
import './SingleProductDetail.css'
import { URL } from '../api';
import axios from 'axios';
import Size from '../SingleProduct/Size';
import ColorChoise from '../SingleProduct/Color';
import { useParams } from 'react-router';

export default function SingleProductDetail(props) {
    const { product_id } = useParams();
    const [index, setIndex] = useState(0);
    const [product, setProduct] = useState([]);
    const myRef = useRef();
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const opt = product.length > 0 ? product[0]['options'] : [];
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
    const selectSizeClassName = (value) => size === value ? "active" : "color";
    const selectColorClassName = (value) => color === value ? "active" : "";
    const changeSize = (newSize) => {
        setSize(newSize);
    }
    const changeColor = (newColor) => {
        setColor(newColor);
    }
    useEffect(() => {
        // const { product_id } = props;
        axios.get(`${URL}/get_product_id`, {
            params: {
                product_id
            }
        }).then(({data}) => {
            const res = data.data;
            setProduct(res)
        }).catch(err=> console.log(err))        
    }, [product_id])
    const handleTab = index => {
        setIndex(index)
        const images = myRef.current.children;
        for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };
    return(
        <div className="app">
            {
                product.map(({product_img,product_id,product_img_url,title,description,price}) =>(
                    <div className="details" key={product_id}>
                        <div className="big-img">
                            <img src={`${product_img_url}${product_img[index]}`} alt="title"/>
                        </div>
                        <div className="box">
                            <div className="row">
                                <h2>{title}</h2>
                                <span>MMK {new Intl.NumberFormat('en-IN').format(price)}</span>
                            </div>
                            <div className="wrapper">
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
                            </div>

                            <p>{description}</p>

                            <DetailThumb images={product_img.map(img => `${product_img_url}/${img}`)} tab={handleTab} myRef={myRef} />
                            <button className="cart">Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};