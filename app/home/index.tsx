//ホーム画面
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleAllMemoPress = () => {
    router.push({ pathname: '/memos' });
  };

  const handleLabelPress = (labelId: number) => {
    const params = { labelId: labelId };
    router.push({ pathname: '/memos', params: params });
  };

  const handleAddLabelPress = () => {};

  const handleEditLabelPress = () => {};

  return (
    <View style={styles.container}>
      <Button title="ラベル追加" onPress={handleAddLabelPress} />

      <Button title="全てのメモ" onPress={handleAllMemoPress} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル1" onPress={() => handleLabelPress(1)} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={handleEditLabelPress} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル2" onPress={() => handleLabelPress(2)} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={handleEditLabelPress} />
      </View>
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
