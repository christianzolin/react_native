import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor, flex, marginTop }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      flex: flex,
      marginTop: marginTop
    }}>
    </View>
  )
}
const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 5 }}>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='red' flex={1} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='blue' flex={1} marginTop={5} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='yellow' flex={1} marginTop={5} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='red' flex={1} marginTop={5} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='blue' flex={1} marginTop={5} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='yellow' flex={1} marginTop={5} />
      </View>
    </View>
  );
};
export default App;