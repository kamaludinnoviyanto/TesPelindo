import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const Form = () => {
 const [negara, setNegara] = useState('');
 const [pelabuhan, setPelabuhan] = useState('');
 const [barang, setBarang] = useState('');
 const [harga, setHarga] = useState('');
 const [tarif, setTarif] = useState('');

 const handleSubmit = () => {
 };

 const fetchData = () => {
  fetch('https://insw-dev.ilcs.co.id/my/n/negara?ur_negara=SIN')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('Ada masalah dalam pengambilan data:', error);
    });
};

useEffect(() => {
  fetchData();
}, []);

 return (
    <View style={styles.container}>
      <Text>Negara</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNegara(text)}
        value={negara}
        onPress={fetchData}
      />

      <Text>Pelabuhan</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPelabuhan(text)}
        value={pelabuhan}
      />

      <Text>Barang</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setBarang(text)}
        value={barang}
      />

      <Text>Harga</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setHarga(text)}
        value={harga}
      />

      <Text>Tarif Bea Masuk</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setTarif(text)}
        value={tarif}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
 },
});

export default Form;