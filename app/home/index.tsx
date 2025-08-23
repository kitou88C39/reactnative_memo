//ホーム画面
import { MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { LabelListItem } from '../../src/components/LabelListitem';

const LABEL_DATA = [
  { id: 1, name: 'プログラミング', color: 'blue' },
  { id: 2, name: 'パスワード', color: 'green' },
  { id: 3, name: '料理', color: 'orange' }
];

export default function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <MaterialIcons name="new-label" size={24} color="black" onPress={handleAddLabelPress} />;
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
      <Button title="全てのメモ" onPress={handleAllMemoPress} />

      <LabelListItem color="red" name="ラベル1" onPress={() => handleLabelPress(1)} onEditPress={() => handleEditLabelPress(1)} />
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
