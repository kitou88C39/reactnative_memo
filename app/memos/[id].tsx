//メモ修正画面
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MemoEditScreen() {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="作成" onPress={handleCreatePress} />;
      }
    });
  }, []);

  const handleSavePress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>メモ修正: {id}</Text>
      <Button title="保存" onPress={handleSavePress} />
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
