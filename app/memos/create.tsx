// メモ作成画面
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';
import { useRecoilState } from 'recoil';
import { selectedLabelIdState } from '../../src/recoils/selectedLabelIdState';

export default function MemoCreateScreen() {
  const navigation = useNavigation();

  const [selectedLabelId, setSelectedLabelId] = useRecoilState(selectedLabelIdState);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="作成" onPress={handleCreatePress} />;
      }
    });
  }, []);

  const handleCreatePress = () => {
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
