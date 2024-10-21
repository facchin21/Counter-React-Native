import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useState } from 'react';
// import { PrimaryButton } from '../components';

export const CounterScreen = () => {
    const [count, setCount] = useState(0);
    const incrementNumber = () => {
        setCount((prev) => prev + 1);
    };
    const resetNumber = () => {
        setCount(0);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            {/* <PrimaryButton
                onPress={incrementNumber}
                onLongPress={resetNumber}
                label="Incrementar" /> */}
            <Button
                onPress={incrementNumber}
                onLongPress={resetNumber}
                mode="contained">
            Incrementar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
    },
});

