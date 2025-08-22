//ホーム画面
import { MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <MaterialIcons name="new-label" size={24} color="black" />;
      }
    });
  }, []);

  const handleAllMemoPress = () => {
    router.push({ pathname: '/memos' });
  };

  const handleLabelPress = (labelId: number) => {
    const params = { labelId: labelId };
    router.push({ pathname: '/memos', params: params });
  };

  const handleAddLabelPress = () => {
    router.push({ pathname: '/labels/create' });
  };

  const handleEditLabelPress = (labelId: number) => {
    router.push({ pathname: `/labels/${labelId}` });
  };

  return (
    <View style={styles.container}>
      <Button title="ラベル追加" onPress={handleAddLabelPress} />

      <Button title="全てのメモ" onPress={handleAllMemoPress} />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル1" onPress={() => handleLabelPress(1)} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={() => handleEditLabelPress(1)} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="ラベル2" onPress={() => handleLabelPress(2)} />
        <MaterialIcons name="edit" size={24} color={'gray'} onPress={() => handleEditLabelPress(2)} />
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
