import './styles.css';

import { useEffect, useState } from 'react';

import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';

import { OrderLocationdata, Product } from './types';
import { fetchProducts } from './api';
import Footer from '../Footer';
import OrderLocation from './OrderLocation';


function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    console.log(products)

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location) }/>
            <Footer />
        </div>
    )
}

export default Orders;