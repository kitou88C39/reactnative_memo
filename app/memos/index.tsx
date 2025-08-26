//メモ修正画面
import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LabelListModal } from '../../src/components/LabelListModal';
import { MemoListItem } from '../../src/components/MemoListitem';
import { LabelTag } from '../../src/components/LabelTag';
import { useRecoilState } from 'recoil';
import { selectedLabelIdState } from '../../src/recoils/selectedLabelIdState';
import { type Label } from '../../src/types/label';

import { LABEL_DATA } from '../../src/dummy_data/labelData';
import { MEMO_DATA } from '../../src/dummy_data/memoData';

const MEMO_DATA = [
  { id: 'ABCD', name: 'useStateについて', content: 'blue', label: { color: 'blue', name: 'プログラミング' } },
  { id: 'EFGH', name: 'アカウント', content: 'メールアドレス' },
  { id: 'IJKL', name: 'オムライス', content: '卵' }
];

// アプリ起動時の画面
export default function MemoListScreen() {
  const navigation = useNavigation();

  const [selectedLabelId, setSelectedLabelId] = useRecoilState(selectedLabelIdState);
  const [labels, setLabels] = useState<Label[]>();

  const selectedLabel = LABEL_DATA.find(label => label.id === selectedLabelId);

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

  const handleLabelListModalClose = () => {
    setIsLabelListModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          selectedLabel ? (
            <View style={{ margin: 10 }}>
              <LabelTag color={selectedLabel.color} name={selectedLabel.name} />
            </View>
          ) : (
            <></>
          )
        }
        contentContainerStyle={{ paddingBottom: 100 }}
        data={MEMO_DATA}
        renderItem={({ item }) => (
          <MemoListItem
            name={item.title}
            content={item.content}
            onPress={() => handleMemoPress(item.id)}
            onLongPress={() => handleMemoLongPress(item.id)}
            onDeletePress={() => handleMemoDeletePress(item.id)}
            label={selectedLabelId ? undefined : LABEL_DATA.find(label => label.id === item.labelId)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <LabelListModal
        visible={isLabelListModalVisible}
        title="ラベル設定"
        data={LABEL_DATA}
        onPress={handleLabelPress}
        onClose={handleLabelListModalClose}
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
