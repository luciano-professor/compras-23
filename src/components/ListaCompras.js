import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import ItemCompra from './ItemCompra';
import InputItemCompra from './InputItemCompra';
import uuid from 'react-uuid';

const ListaCompras = () => {
  //estado que vai armazenar os dados
  const [lista, setLista] = useState([]);

  function adicionarNaLista(nomeItem) {
    let temp = [...lista, { id: uuid(), nome: nomeItem }];
    setLista(temp);
  }

  function removerDaLista(item) {
    const temp = lista.filter((elemento) => elemento.id != item.id);
    setLista(temp);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Compras
        <AntDesign name="shoppingcart" size={30} />
      </Text>

      {/* Input de adicionar item */}
      <InputItemCompra aluno="gadiel" submit={adicionarNaLista} />

      {/* Exibindo a lista */}
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <ItemCompra itemCompra={item} remover={removerDaLista} />
        )}
      />
    </View>
  );
};

export default ListaCompras;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  titulo: {
    color: '#F9FAFB',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
});
