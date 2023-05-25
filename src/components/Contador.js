import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [outroContador, setOutroContador] = useState(0);

  function contar() {
    setContador(contador + 1);
  }

  return (
    <View>
      <Text style={styles.texto}>Contador: {contador} </Text>

      <TouchableOpacity style={styles.botao} onPress={contar}>
        <Text style={styles.textoBotao}>Contar</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>Outro Contador: {outroContador} </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setOutroContador(outroContador + 1)}
      >
        <Text style={styles.textoBotao}>Contar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
  },
  botao: {
    backgroundColor: '#6B7280',
    padding: 10,
    width: 100,
    alignSelf: 'center',
    margin: 10,
  },
  textoBotao: {
    fontSize: 20,
    textAlign: 'center',
  },
});
