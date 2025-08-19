import { StyleSheet, Text, View } from 'react-native';

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Text>アプリ起動中・・</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    justifyContent: 'center'
  }
});
