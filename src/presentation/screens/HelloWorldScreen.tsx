import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}
        numberOfLines={1}
        ellipsizeMode="tail">Hello , {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    padding: 20,
  },
});
