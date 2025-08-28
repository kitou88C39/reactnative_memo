import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as LabelService from '../src/services/labelServices';
import * as MemoService from '../src/services/memoServices';

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

  initApp();

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
