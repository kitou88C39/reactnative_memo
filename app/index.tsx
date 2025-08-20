import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InitialScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>アプリ起動中・・</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    justifyContent: 'center'
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
