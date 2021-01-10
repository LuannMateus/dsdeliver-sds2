import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { fetchOrders } from '../api';
import { Order } from '../types';

import Header from '../Header';
import OrderCard from '../OrderCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';


function Orders() {

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const navegation = useNavigation();

    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true)
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(error => Alert.alert("Houve um error ao buscar os pedidos!"))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        } 
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navegation.navigate("OrderDatails", {
            order
        });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text>Buscando pedidos...</Text>
                ) : (
                        orders.map(order => {
                            return (
                                <TouchableWithoutFeedback key={order.id}
                                    onPress={() => handleOnPress(order)}>
                                    <OrderCard order={order} />
                                </TouchableWithoutFeedback>
                            )
                        })
                    )}

            </ScrollView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});

export default Orders;