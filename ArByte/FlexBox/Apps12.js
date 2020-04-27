import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor }) => {
  return (
    <View style={{
      width: 180,
      height: 210,
      backgroundColor: cor,
      borderRadius: 5,
      borderBottom: 'solid 1px black',
      marginTop: 5,
    }}>
    </View>
  )
}
const App = () => {
  return (
    <View style={{
      flexWrap: 'wrap',
      alignContent: 'stretch',
      alignItems: 'center',
      marginTop: 5
    }}>
      <Caixa cor='red' />
      <Caixa cor='blue' />
      <Caixa cor='yellow' />
      <Caixa cor='green' />
      <Caixa cor='purple' />
    </View>
  );
};

export default App;