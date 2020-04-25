import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }}>
        <Caixa cor='red' flex={1} />
        <Caixa cor='blue' flex={3} />
      </View>
    </SafeAreaView>
  );
};
export default App;