// function Voto(){
//   const [totalDeVotos, setVotos] = useState(0);

//   return (
//     <View>
//       <Text style={styles.sectionTitle} >O total de votos é {totalDeVotos} !</Text>
//       <Button         
//         onPress={() => {
//           Alert.alert('Voto Computado')
//           setVotos(totalDeVotos + 1);
//       }}
//         title='Adicionar um voto' 
//         color="#000000"
//       />
//       <Button
//       onPress= {  () => {
//         setVotos(totalDeVotos - totalDeVotos)
//       }}
//       title= "Zerar votos!!!"
//       color="#002003"
//     /> 

//     </View> 
//   );
// }

// export default function Votos(){
//   return (
//     <SafeAreaView>
//       <Voto />
//     </SafeAreaView>
//   )}


class Voto extends React.Component {
  constructor(){
    super();
    this.state = {
      totalVotos: 0,
    }
  }
  render(){
    return (
      <View>
        <Text style={styles.sectionTitle} >O total de votos é {this.state.totalVotos} !</Text>
        <Button         
          onPress={() => {
            this.setState({totalVotos: this.state.totalVotos + 1})
            Alert.alert('Voto Computado')
        }}
          title='Adicionar um voto' 
          color="#000000"
        />
        <Button
        onPress= {  () => {
          this.setState({totalVotos: this.state.totalVotos - this.state.totalVotos})
        }}
        title= "Zerar votos!!!"
        color="#002003"
      /> 
  
      </View> 
    );
  }
}

export default Voto;