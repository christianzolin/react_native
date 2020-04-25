import React from 'react';
import {
    SafeAreaView, View,
} from 'react-native';

const caixas = [{
    cor: 'red', flex: 1
}, {
    cor: 'blue', flex: 1
}, {
    cor: 'yellow', flex: 1
}]
const Caixa = (cor) => {
    return (
        <View style={{
            backgroundColor: cor,
            borderRadius: 5,
            margin: 5,
            width: 100,
            height: 100,
        }}>
        </View>
    )
}

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "space-between", alignItems: 'center' }}>
                {
                    caixas.map(caixa => <Caixa cor={caixa.cor} />)
                }
            </View>
        </SafeAreaView>
    );
};

export default App;