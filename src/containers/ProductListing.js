import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setProduct} from '../redux/actions/productAction';
import axios from 'axios';
import Product from './Product';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err);
        })
        dispatch(setProduct(response.data));
    };


    useEffect(() => {
        fetchProduct();
    }, [])


    console.log(products);
    return (
        <div className="ui grid container" style={{ marginTop: '30px' }}>
            <Product />
        </div>
    )
}

export default ProductListing
