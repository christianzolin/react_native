import React from 'react';
import { View } from 'react-native';

const caixas = [{
  cor: 'red', flex: 3
}, {
  cor: 'blue', flex: 1
}, {
  cor: 'yellow', flex: 3
}]
const Caixa = ({ cor, flex }) => {
  return (
    <View style={{
      backgroundColor: cor,
      borderRadius: 5,
      margin: 5,
      flex: flex,
    }}>
    </View>
  )
}

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {
        caixas.map(caixa => <Caixa cor={caixa.cor} flex={caixa.flex} />)
      }
    </View>
  );
};

export default App;