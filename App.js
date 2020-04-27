import React  from 'react';
import { View, TextInput, Text, Button, Alert } from 'react-native';
import styles from "./src/styles/style"

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: '', idContador: 10, play: false, total: 0, button: '', but: false
    }
    this.start = this.start.bind(this)
  }
  componentDidMount() {
    this.setState({ button: 'cliqui aqui para começar' })
  }
  start(){
    clearInterval(this.idContador);
    this.idContador = setInterval(() => {
      this.setState({ idContador: this.state.idContador - 1 })}, 100);
    this.setState({ play: true, texto: '', button: 'digite uma cor', but: true });
  }
  componentDidUpdate() {
    if (this.state.idContador === 0) {
      clearInterval(this.idContador);
      Alert.alert(`A sua pontuação é ${this.state.texto.length}`)
      this.setState({ 
        total: this.state.texto.length,
        play: false, idContador: 10,
        but: false,
        button: 'cliqui aqui para começar' })
    }
  }
  render() {
    return (
      <View style={{ borderBottomWidth: 1 }}>
        <Text style={styles.text}>Digite o máximo de caracteres que conseguir em 10 Segundos </Text>
        <Text style={styles.tempo}>Tempo: {this.state.idContador} </Text>
        <View style={{ backgroundColor: this.state.texto }}>
          <TextInput
            style={styles.textoInput}
            numberOfLines={4}
            editable={this.state.play}
            multiline={true}
            placeholder='Digite aqui'
            onChangeText={(text) => this.setState({ texto: text })}
            value={this.state.texto}
          />
        </View>
        <View style={styles.view}>
          <Button
            disabled={this.state.but}
            style={{ paddingTop: 10 }}
            title={this.state.button}
            onPress={this.start}/>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>Você digitou: {this.state.total} caracteres</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}