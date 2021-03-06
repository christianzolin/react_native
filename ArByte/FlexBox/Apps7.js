import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor, margin }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      margin: margin
    }}>
    </View>
  )
}

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Caixa cor='red' margin={12} />
        <Caixa cor='blue' />
      </View>
    </View>
  );
};

export default App;