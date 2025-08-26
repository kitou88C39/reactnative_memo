// メモ作成画面
import { KeyboardAvoidingView } from '@gluestack-ui/themed';
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';
import { Indicator } from '../../src/components/Indicator';

export default function MemoCreateScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="作成" onPress={handleCreatePress} />;
      }
    });
  }, []);

  const handleCreatePress = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      router.back();
    }, 3000);

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
