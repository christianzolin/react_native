
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
      texto: '', tempo: 10, play: false, total: 0
    }
  }
  componentDidMount() {
    this.start()
  }

  start() {
    clearInterval(this.tempo);
    this.tempo = setInterval(() => {
      this.setState({ tempo: this.state.tempo - 1 })
    }, 1000
    );
    this.setState({ play: true, texto: '' });
  }
  componentDidUpdate() {
    if (this.state.tempo === 0) {
      clearInterval(this.tempo);
      Alert.alert(`A sua pontuação é ${this.state.texto.length}`)
      this.setState({ total: this.state.texto.length, play: false, tempo: 10 })
    }
  }
  render() {
    return (
      <View style={{
        backgroundColor: this.state.texto,
        borderBottomWidth: 1
      }}
      >
        <Text style={styles.text}>Digite o máximo de caracteres que conseguir em 10 Segundos </Text>
        <Text style={styles.tempo}>Tempo: {this.state.tempo} </Text>
        <Contador
          style={styles.textoInput}
          numberOfLines={4}
          editable={this.state.play}
          multiline={true}
          placeholder='Digite aqui'
          onChangeText={(text) => this.setState({ texto: text })}
          value={this.state.texto}
        />
        <View style={styles.view}>
          <Button
            style={{ paddingTop: 10 }}
            title="reload"
            onPress={() => {
              this.start()
            }}
          />
          <SafeAreaView style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, textAlign: 'center' }}>Você digitou: {this.state.total} caracteres</Text>
          </SafeAreaView>
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
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40,
    paddingHorizontal: 50
  },
  text: {
    marginTop: 10,
    padding: 15,
    fontSize: 20,
    textAlign: 'justify',
  },
  tempo: {
    fontSize: 18
  },
  textoInput: {
    marginTop: 10,
    height: 70,
    borderColor: 'gray',
    borderWidth: 2
  },
  view: {
    padding: 10,
    marginTop: 10
  }
})