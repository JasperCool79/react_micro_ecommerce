import { Typography } from '@material-ui/core'
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import SingleProduct from '../../SingleProduct/SingleProduct'


export default function ProductDetail() {
    const { prouct_id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get()
        return () => {
            cleanup
        }
    }, [prouct_id])
    return (
        <>
            <Typography>Dteail</Typography>
            
        </>
    )
}
