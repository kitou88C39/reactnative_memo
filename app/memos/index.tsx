//メモ修正画面
import { Feather } from '@expo/vector-icons';
import { router, useNavigation, useFocusEffect } from 'expo-router';
import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, View, Alert } from 'react-native';
import { LabelListModal } from '../../src/components/LabelListModal';
import { LabelTag } from '../../src/components/LabelTag';
import { MemoListItem } from '../../src/components/MemoListitem';
import { type Label } from '../../src/types/label';
import { type Memo } from '../../src/types/memo';
import * as MemoServices from '../../src/services/memoServices';
import { Indicator } from '../../src/components/Indicator';

import { useRecoilValue } from 'recoil';
import { selectedLabelIdState } from '../../src/recoils/selectedLabelIdState';

import { LABEL_DATA } from '../../src/dummy_data/labelData';

// アプリ起動時の画面
export default function MemoListScreen() {
  const navigation = useNavigation();

  const selectedLabelId = useRecoilValue(selectedLabelIdState);
  const [labels, setLabels] = useState<Label[]>([]);
  const [memos, setMemos] = useState<Memo[]>([]);
  const selectedLabel = labels.find(label => label.id === selectedLabelId);

  const [isLabelListModalVisible, setIsLabelListModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Feather name="edit" size={24} color="black" onPress={handleCreatePress} />;
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const loadData = async (labelId: number | undefined) => {
        try {
          const labels = LABEL_DATA;
          setLabels(labels);
          const memos = await MemoServices.getMemos();
          const filteredMemos = labelId ? memos.filter(memo => memo.labelId === selectedLabelId) : memos;
          setMemos(filteredMemos);
        } catch (error) {
          Alert.alert('エラー', 'メモの取得に失敗しました', [{ text: 'OK', onPress: () => router.back() }]);
        }
      };
      loadData(selectedLabelId);
    }, [selectedLabelId])
  );

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

  const handleMemoDeletePress = async (memoId: string) => {
    setIsLoading(true);

    try {
      MemoServices.deleteMemo(memoId);
      setMemos(memos.filter(memo => memo.id !== memoId));
    } catch (error) {
      Alert.alert('エラー', 'メモの削除に失敗しました', [{ text: 'OK' }]);
    } finally {
      setIsLoading(false);
    }
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
        data={memos}
        renderItem={({ item }) => (
          <MemoListItem
            name={item.title}
            content={item.content}
            onPress={() => handleMemoPress(item.id)}
            onLongPress={() => handleMemoLongPress(item.id)}
            onDeletePress={() => handleMemoDeletePress(item.id)}
            label={selectedLabelId ? undefined : labels?.find(label => label.id === item.labelId)}
          />
        )}
        keyExtractor={item => item.id}
      />
      <LabelListModal
        visible={isLabelListModalVisible}
        title="ラベル設定"
        data={labels}
        onPress={handleLabelPress}
        onClose={handleLabelListModalClose}
      />
      <Indicator visible={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
