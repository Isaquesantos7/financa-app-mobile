import { StyleSheet, View, Text } from "react-native";

import Header from "../../components/Header/Index.js";

function Home() {
    return (
        <View style={styles.container}>
            <Header name="Isaquesantos7"/>
            <Text>My Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Home;