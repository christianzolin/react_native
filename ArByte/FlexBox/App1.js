import React from 'react';
import { View } from 'react-native';

const caixas = [{
  cor: 'red', 
}, {
  cor: 'blue', 
}, {
  cor: 'yellow',
  
}]
const Caixa = ({ cor }) => {
  return (
    <View style={{
      backgroundColor: cor,
      borderRadius: 5,
      margin: 5,
      width: 100,
      height: 100,
    }}>
    </View>
  )
}
const App = () => {
  return (
    <View>
      {
        caixas.map(caixa => <Caixa cor={caixa.cor} />)
      }
    </View>
  );
};

export default App;