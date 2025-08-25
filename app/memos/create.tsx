// メモ作成画面
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MemoInputForm } from '../../src/components/MemoInputForm';

export default function MemoCreateScreen() {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <MemoInputForm
      title='メモ'
      content='メモ内容'
      onTitleChange={() => ()}
      onContentChange={() => ()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4',
    justifyContent: 'center'
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
