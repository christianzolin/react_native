import React from 'react';
import {
    SafeAreaView, View,
} from 'react-native';

const caixas = [{
    cor: 'red', flex: 3
}, {
    cor: 'blue', flex: 1
}, {
    cor: 'yellow', flex: 2
}]
const Caixa = ({ cor, flex }) => {
    return (
        <View style={{
            backgroundColor: cor,
            borderRadius: 5,
            margin: 5,
            flex: flex,
            width: 100,
            height: 100,
        }}>
        </View>
    )
}
const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {
                    caixas.map(caixa => <Caixa cor={caixa.cor} />)
                }
            </View>
        </SafeAreaView>
    );
};

export default App;