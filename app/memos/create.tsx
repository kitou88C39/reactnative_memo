// メモ作成画面
import { router, useNavigation } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoCreateScreen() {
  const navigation = useNavigation();
  const handleCreatePress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>メモ作成</Text>
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
