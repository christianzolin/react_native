import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      marginRight: 10
    }}>
    </View>
  )
}

const App = () => {
  return (
    <View style={{
      flexDirection: 'row',
      margin: 5
    }}>
      <Caixa cor='red' />
      <Caixa cor='blue' />
      <Caixa cor='yellow' />
    </View>
  );
};

export default App;