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
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <Caixa cor='red' />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Caixa cor='blue' />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Caixa cor='yellow' />
            </View>
        </SafeAreaView>
    );
};

export default App;