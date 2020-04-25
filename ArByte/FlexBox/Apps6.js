import React from 'react';
import {
    SafeAreaView, View,
} from 'react-native';

const Caixa = (cor) => {
    return (
        <View style={{
            width: 100,
            height: 100,
            backgroundColor: cor,
            borderRadius: 5,
        }}>
        </View>
    )
}
const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 5 }}>
                <Caixa cor='red' />
                <View style={{
                    marginTop: -100,
                    flexDirection: 'column',
                    margin: 5,
                    alignItems: 'center'
                }}>
                    <Caixa cor='blue' />
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Caixa cor='yellow' />
            </View>
        </SafeAreaView>
    );
};

export default App;