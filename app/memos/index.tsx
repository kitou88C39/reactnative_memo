//メモ修正画面
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MemoListItem } from '../../src/components/MemoListitem';

const MEMO_DATA = [
  { id: 1, name: 'プログラミング', color: 'blue' },
  { id: 2, name: 'パスワード', color: 'green' },
  { id: 3, name: '料理', color: 'orange' }
];

// アプリ起動時の画面
export default function MemoListScreen() {
  const navigation = useNavigation();
  const { labelId } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Feather name="edit" size={24} color="black" onPress={handleCreatePress} />;
      }
    });
  }, []);

  const handleCreatePress = () => {
    router.push({ pathname: '/memos/create' });
  };

  const handleMemoPress = (memoId: String) => {
    router.push({ pathname: `/memos/${memoId}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{labelId ? `ラベルID: ${labelId}` : '全てのメモ'}</Text>
      <MemoListItem
        name="メモ1"
        content="メモ1の内容"
        onPress={() => handleMemoPress('ABCD')}
        onLongPress={() => handleMemoPress('ABCD')}
        onDeletePress={() => handleMemoPress('ABCD')}
        label={undefined}
      />

      <Button title="メモ1" onPress={() => handleMemoPress('ABCD')} />
      <Button title="メモ2" onPress={() => handleMemoPress('EFGH')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
