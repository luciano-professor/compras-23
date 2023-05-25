import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from '@rneui/themed';

const InputItemCompra = ({ aluno, submit }) => {
  const [textoInput, setTextoInput] = useState('');

  function submeterInput() {
    // console.warn(textoInput);
    submit(textoInput);
    // console.warn(aluno);
    setTextoInput('');
  }

  return (
    <View>
      <Input
        placeholder="Adicionar item para comprar"
        inputStyle={styles.input}
        rightIcon={{ type: 'material', name: 'add', iconStyle: styles.icone }}
        leftIcon={{
          type: 'material',
          name: 'shopping-cart',
          iconStyle: styles.icone,
        }}
        autoCorrect={false}
        value={textoInput}
        onChangeText={setTextoInput}
        onSubmitEditing={submeterInput}
      />
    </View>
  );
};

export default InputItemCompra;

const styles = StyleSheet.create({
  input: {
    color: '#F9FAFB',
  },
  icone: {
    color: '#F9FAFB',
  },
});
