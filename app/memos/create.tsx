// メモ作成画面
import { router, useNavigation } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function MemoCreateScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Feather name="edit" size={24} color="black" onPress={handleCreatePress} />;
      }
    });
  }, []);

  const handleCreatePress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>メモ作成</Text>
      <Button title="作成" onPress={handleCreatePress} />
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
