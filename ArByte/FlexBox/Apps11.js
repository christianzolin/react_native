import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor }) => {
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-evenly' }}>
      <Caixa cor='red' />
      <Caixa cor='blue' />
    </View>
  );
};
export default App;