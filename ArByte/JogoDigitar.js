
import React, { Component } from 'react';
import { 
  View, TextInput, Text, Button, Alert, SafeAreaView, StyleSheet
} from 'react-native';

class Contador extends Component {
  render() {
    return (
      <TextInput 
        {...this.props}
      />
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '', tempo: 10, play: false
    }
    this.contador;
  }
  componentDidMount(){
    this.start()
  }
  start(){
    this.contador = setInterval(() => {
      this.decrementaContadador()},1000
    );
    this.setState({play: true});
  }
  
  decrementaContadador(){
      this.setState((state=>({tempo: state.tempo - 1})))
    if(this.state.tempo === 0 ){
      this.setState({play: false})
      this.componentWillUnmount()
    }
  }
 
  componentWillUnmount(){
    clearInterval(this.contador); 
    Alert.alert(`A sua pontuação é ${this.state.texto.length}`)
  }
  render() {
    return (
      <View style={{
        backgroundColor: this.state.texto,
        borderBottomWidth: 1 }}
        >
        <Text style={styles.text}>Digite o máximo de caracteres que conseguir em 10 Segundos </Text>
        <Text style={styles.tempo}>Tempo: {this.state.tempo} </Text>
        <Contador
          style={styles.textoInput}
          numberOfLines = {4}
          editable={this.state.play}
          multiline = {true}
          placeholder='Digite aqui'
          onChangeText={(text) => this.setState({texto: text})}
          value={this.state.texto}
        />
      
      <View style={styles.view}>
      <Button
        title="reload"
        onPress={()=>{
          this.setState({texto: '', tempo: 10, play: false})
          this.start()
        }}
        />
        </View>
    </View>
    );
  }
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Game />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFF',
    paddingTop: 40,
    paddingHorizontal: 50
  }, 
  text: {
    marginTop:10,
    padding: 15,
    fontSize: 20,
    textAlign: 'justify',
  },
  tempo:{
    fontSize: 18
  },
  textoInput:{
    marginTop:10,
    height: 70, 
    borderColor: 'gray', 
    borderWidth: 2
  },
  view:{
    padding: 10,
    marginTop: 10
  }
})