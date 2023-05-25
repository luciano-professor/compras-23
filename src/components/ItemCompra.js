import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed'; //React Native Elements (biblioteca)
import { AntDesign } from '@expo/vector-icons';

const ItemCompra = ({ itemCompra, remover }) => {
  const [marcado, setMarcado] = useState(false);

  function removerItem() {
    Alert.alert('', `Deseja remover o item ${itemCompra.nome}?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => remover(itemCompra),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <CheckBox
        checked={marcado}
        containerStyle={styles.checkboxContainer}
        checkedColor="#9CA3AF"
        uncheckedColor="#F9FAFB"
        onPress={() => setMarcado(!marcado)}
        title={itemCompra.nome}
        textStyle={[styles.nomeItem, marcado && styles.itemMarcado]}
      />

      <TouchableOpacity onPress={removerItem}>
        <AntDesign name="minuscircle" size={20} color="#F9FAFB" />
      </TouchableOpacity>
    </View>
  );
};

export default ItemCompra;

const styles = StyleSheet.create({
  nomeItem: {
    color: '#F9FAFB',
    fontSize: 20,
    // padding: 10,
  },
  container: {
    margin: 5,
    backgroundColor: '#374150',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
  },
  itemMarcado: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
});
