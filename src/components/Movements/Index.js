import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Movements({dados}) {

    //estados
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{dados.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{dados.label}</Text>
                {
                    showValue ? (
                        <Text style={dados.type == 1 ? styles.value : styles.expenses}>
                            {dados.type == 1 ? `R$ ${dados.value}` : `R$ -${dados.value}`}
                        </Text>
                    ) : (
                        <View style={styles.skaleton}></View>
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    }, 

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },

    date: {
        color: "#DADADA",
        fontWeight: 'bold',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },

    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },

    skaleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 8,
    }
});

export default Movements;