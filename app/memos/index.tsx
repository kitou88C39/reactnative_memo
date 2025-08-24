//メモ修正画面
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { MemoListItem } from '../../src/components/MemoListitem';
import { LabelTag } from '../../src/components/LabelTag';

const MEMO_DATA = [
  { id: 'ABCD', name: 'useStateについて', content: 'blue', label: { color: 'blue', name: 'プログラミング' } },
  { id: 'EFGH', name: 'アカウント', content: 'メールアドレス' },
  { id: 'IJKL', name: 'オムライス', content: '卵' }
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

  const handleMemoLongPress = (memoId: String) => {
    console.log('メモが長押しされました', memoId);
  };

  const handleMemoDeletePress = (memoId: String) => {
    console.log('メモが削除されました', memoId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          labelId ? (
            <View style={{ margin: 10 }}>
              <LabelTag color="blue" name={`ラベルID: ${labelId}`} />
            </View>
          ) : (
            <></>
          )
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        data={MEMO_DATA}
        renderItem={({ item }) => (
          <MemoListItem
            name={item.name}
            content={item.content}
            onPress={() => handleMemoPress(item.id)}
            onLongPress={() => handleMemoLongPress(item.id)}
            onDeletePress={() => handleMemoDeletePress(item.id)}
            label={item.label}
          />
        )}
        keyExtractor={item => item.id}
      />
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
