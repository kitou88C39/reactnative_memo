//メモ修正画面
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Alert } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';
import * as MemoService from '../../src/services/memoServices';
import { Indicator } from '../../src/components/Indicator';

export default function MemoEditScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams() as { id: string };

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="保存" onPress={handleSavePress} />;
      }
    });
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadData = async (memoId: string) => {
      try {
        const memo = await MemoService.getMemo(memoId);
        if (!memo) {
          Alert.alert('エラー', 'メモが見つかりません', [{ text: 'OK', onPress: () => router.back() }]);
          return;
        }

        setTitle(memo.title);
        setContent(memo.content);
      } catch (error) {
        Alert.alert('エラー', 'データの取得に失敗しました', [{ text: 'OK', onPress: () => router.back() }]);
      }
    };
    if (isMounted) {
      loadData(id);
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleSavePress = async() => {
    if (!title) {
      Alert.alert('エラー', 'タイトルを入力してください');
      return;
    }

    setIsLoading(true);

    try {
      await MemoService.editMemo(id,title, content);
      router.back();
    } catch {
      Alert.alert('エラー', 'メモの保存に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };
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
