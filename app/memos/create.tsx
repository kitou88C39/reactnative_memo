// メモ作成画面
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';
import * as MemoService from '../../src/services/memoServices';
import { router } from 'expo-router';

import { useRecoilState } from 'recoil';
import { selectedLabelIdState } from '../../src/recoils/selectedLabelIdState';

export default function MemoCreateScreen() {
  const navigation = useNavigation();

  const [selectedLabelId, setSelectedLabelId] = useRecoilState(selectedLabelIdState);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="作成" onPress={handleCreatePress} />;
      }
    });
  }, [title, content]);

  const handleCreatePress = async () => {
    if (!title) {
      Alert.alert('エラー', 'タイトルを入力してください');
      return;
    }

    setIsLoading(true);

    try {
      await MemoService.addMemo(selectedLabelId, title, content);
      router.back();
    } catch {
      Alert.alert('エラー', 'タイトルを入力してください');
    } finally {
      setIsLoading(false);
    }
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
