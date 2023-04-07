import { StyleSheet, View, Text } from "react-native";

import Header from "../../components/Header/Index.js";

import Balance from '../../components/Balance/Index.js';

function Home() {

    const saldo = '9.250,90';
    const gasto = '251,00';

    return (
        <View style={styles.container}>
            <Header name="Isaquesantos7"/>
            <Balance saldo={saldo} gasto={gasto}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    }
});

export default Home;