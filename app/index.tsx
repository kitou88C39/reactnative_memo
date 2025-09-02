import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as LabelService from '../src/services/labelServices';
import * as MemoService from '../src/services/memoServices';
import InitialLabelData from '../src/database/data/initialLabelData.json';
import InitialMemoData from '../src/database/data/initialMemoData.json';

export default function InitialScreen() {
  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    try {
      await LabelService.createTable();
      await MemoService.createTable();
      router.replace('/home');
    } catch (error) {
      console.log('アプリの起動に失敗しました', error);
      Alert.alert('エラー', 'アプリの起動に失敗しました', [{ text: '再起動', onPress: initApp }]);
    }
  };

  const initalDatabase = async () => {
    const memos = await MemoService.getMemos();
    const labels = await LabelService.getLabels();

    if (!memos.length && !labels.length) {
      for (const key in InitialLabelData) {
        await LabelService.addLabel(InitialLabelData[key].name, InitialLabelData[key].color);
      }
      for (const key in InitialMemoData) {
        await MemoService.addMemo(InitialMemoData[key].labelId, InitialMemoData[key].title, InitialMemoData[key].content);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>アプリ起動中・・</Text>
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
