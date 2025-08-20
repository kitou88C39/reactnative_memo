//ホーム画面
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const handleAllMemoPress = () => {};

  const handleLabelPress = () => {};

  const handleAddLabelPress = () => {};

  const handleEditLabelPress = () => {};

  return (
    <View style={styles.container}>
      <Button title="ラベル追加" onPress={handleAddLabelPress} />

      <Button title="全てのメモ" onPress={handleAllMemoPress} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル1" onPress={handleEditLabelPress} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル2" onPress={handleLabelPress} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={} />
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
