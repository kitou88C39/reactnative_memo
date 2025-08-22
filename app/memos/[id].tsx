//メモ修正画面
import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';

export default function MemoEditScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="保存" onPress={handleSavePress} />;
      }
    });
  }, []);

  const handleSavePress = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>メモ修正: {id}</Text>
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
