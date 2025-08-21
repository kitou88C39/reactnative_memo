//メモ修正画面
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MemoListScreen() {
  const { labelId } = useLocalSearchParams;

  const handleCreatePress = () => {
    router.push({ pathname: '/memos/create' });
  };

  const handleMemoPress = (memoId: String) => {
    router.push({ pathname: `/memos/${memoId}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{labelId ? `ラベルID: ${labelId}` : '全てのメモ'}</Text>
      <Button title="メモ作成" onPress={handleCreatePress} />
      <Button title="メモ1" onPress={() => handleMemoPress('ABCD')} />
      <Button title="メモ2" onPress={() => handleMemoPress('EFGH')} />
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
