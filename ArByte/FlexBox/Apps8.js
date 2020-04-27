import React from 'react';
import { View } from 'react-native';

const Caixa = ({ cor, flex }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: cor,
      borderRadius: 5,
      flex: flex,
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
        alignItems: 'flex-end'
      }}>
        <Caixa cor='red' flex={1} />
        <Caixa cor='blue' flex={3} />
      </View>
    </View>
  );
};
export default App;