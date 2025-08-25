//メモ修正画面
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LabelTag } from '../../src/components/LabelTag';
import { MemoListItem } from '../../src/components/MemoListitem';
import { LabelListModal } from '../../src/components/LabelListModal';

const MEMO_DATA = [
  { id: 'ABCD', name: 'useStateについて', content: 'blue', label: { color: 'blue', name: 'プログラミング' } },
  { id: 'EFGH', name: 'アカウント', content: 'メールアドレス' },
  { id: 'IJKL', name: 'オムライス', content: '卵' }
];

// アプリ起動時の画面
export default function MemoListScreen() {
  const navigation = useNavigation();
  const { labelId } = useLocalSearchParams();

  const [isLabelListModalVisible, setIsLabelListModalVisible] = useState(false);

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
    setIsLabelListModalVisible(true);
  };

  const handleMemoDeletePress = (memoId: String) => {
    console.log('メモが削除されました', memoId);
  };

  const handleLabelPress = (labelId?: number) => {
    console.log('ラベルが選択されました', labelId);
    setIsLabelListModalVisible(false);
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
      <LabelListModal
        visible={isLabelListModalVisible}
        title="ラベル設定"
        data={[]}
        onPress={() => {}}
        onClose={() => {
          setIsLabelListModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
