import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor, marginRight }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      marginRight: marginRight
    }}>
    </View>
  )
}
const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-around' }}>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='red' marginRight={100} />
        <Caixa cor='blue' />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='yellow' marginRight={100} />
        <Caixa cor='green' />
      </View>
    </View>
  );
};
export default App;