import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Balance({saldo, gasto}) {

    const [showValueSaldo, setShowValueSaldo] = useState(false);
    const [showValueGasto, setShowValueGasto] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                {
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <TouchableOpacity onPress={ () => setShowValueSaldo(!showValueSaldo) }>
                            {
                                showValueSaldo ? (
                                    <Text style={styles.balance}>{saldo}</Text>
                                ) : (
                                    <View style={styles.skaleton}></View>
                                )
                            }
                        </TouchableOpacity>
                    </View>
                }
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gasto</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <TouchableOpacity onPress={ () => setShowValueGasto(!showValueGasto)}>
                        {
                            showValueGasto ? (
                                <Text style={styles.expenses}>{gasto}</Text>
                            ) : (
                                <View style={styles.skaleton}></View>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    itemTitle: {
        fontSize: 20,
        color: '#DADADA',
    },

    currencySymbol: {
        color: '#DADADA',
        marginRight: 6,
    },

    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },

    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    },

    skaleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 100 / 2,
    }
});

export default Balance;