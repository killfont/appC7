import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import React, { Component } from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>bienvennue</Text>
      <Button onPress={() => connect()} title="suite" color="red" accessibilityLabel="Learn more about this purple button" />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 100,

  },
  press: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 25,
    padding: 10,
    margin: 100,
    fontSize: 50
  }
});

export function connect() {

  return (
    <View >
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque, enim nesciunt doloribus quia hic soluta ratione, veritatis ducimus deleniti repellendus ipsum. Assumenda, aut reiciendis ut ratione ex tempora dolorum!</Text>

      <StatusBar style="auto" />

    </View>
  );

}
