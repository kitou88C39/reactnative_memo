//ホーム画面
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button title="ラベル追加" onPress={} />
      <Button title="ラベル追加" onPress={} />
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
