// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import React from 'react';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        {/* <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
