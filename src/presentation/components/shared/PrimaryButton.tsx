import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

interface Props {
    label : string;
    onPress? : () => void;
    onLongPress? : () => void;

}

export const PrimaryButton = ({ onPress, onLongPress, label } : Props) => {
  return (
    <Pressable
    onPress={ onPress }
    onLongPress={ onLongPress }
    style={ ({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
    ]}
>
    <Text>{label}</Text>
</Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: '#746AB',
    },
});

