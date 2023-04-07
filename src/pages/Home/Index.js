import { StyleSheet, View, Text, FlatList } from "react-native";

import Header from "../../components/Header/Index.js";

import Balance from '../../components/Balance/Index.js';

import Movements from "../../components/Movements/Index.js";

import Actions from "../../components/Actions/Index.js";

const list = [
    {
        id: 1,
        label: 'Boleto Conta de Luz',
        value: '189,00',
        date: '17/03/2023',
        type: 0 // despesas
    },

    {
        id:2,
        label: 'PIX cliente Eliseu',
        value: '1800,00',
        date: '07/04/2023',
        type: 1 // receita // entrada
    },

    {
        id:3,
        label: 'Salário',
        value: '3000,00',
        date: '06/04/2023',
        type: 1 // receita // entrada
    }
]

function Home() {

    const saldo = '9.250,90';
    const gasto = '251,00';

    return (
        <View style={styles.container}>
            <Header name="Isaque Santos Pinto"/>
            <Balance saldo={saldo} gasto={gasto}/>

           <Actions />

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList 
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
                renderItem={ ({item}) => <Movements dados={item}/> }
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        margin: 14
    },

    list: {
        marginStart: 14,
        marginEnd: 14,
    }    
});

export default Home;