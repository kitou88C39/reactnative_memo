//メモ修正画面
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';
import * as MemoService from '../../src/services/memoServices';

import { MEMO_DATA } from '../../src/dummy_data/memoData';

export default function MemoEditScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="保存" onPress={handleSavePress} />;
      }
    });
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const memo = await MemoService.getMemo(memoId);
      if (!memo) {
        Alert.alert('エラー', 'メモが見つかりません', [{ text: 'OK', onPress: () => router.back() }]);
        return;
      }

      setTitle(memo.title);
      setContent(memo.content);
    };
  }, [id]);

  const handleSavePress = () => {
    router.back();
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
      <MemoInputForm title={title} content={content} onTitleChange={setTitle} onContentChange={setContent} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
