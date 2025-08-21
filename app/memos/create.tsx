// メモ作成画面
import { router } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LabelCreateScreen() {
  const handleCreatePress = () => {
    router.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>ラベル作成</Text>
      <Button title="作成" onPress={handleCreatePress} />
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
