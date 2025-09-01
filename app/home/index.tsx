//ホーム画面
import { MaterialIcons } from '@expo/vector-icons';
import { ListItem } from '@rneui/themed';
import { router, useNavigation, useFocusEffect } from 'expo-router';
import { useEffect, useState, useCallback } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import { LabelListItem } from '../../src/components/LabelListitem';
import { type Label } from '../../src/types/label';

import { useRecoilState } from 'recoil';
import { selectedLabelIdState } from '../../src/recoils/selectedLabelIdState';

import * as LabelService from '../../src/services/labelServices';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [labels, setLabels] = useState<Label[]>([]);

  const [selectedLabelId, setSelectedLabelId] = useRecoilState(selectedLabelIdState);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <MaterialIcons name="new-label" size={24} color="black" onPress={handleAddLabelPress} />;
      }
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        try {
          const labels = await LabelService.getLabels();
          setLabels(labels);
        } catch (error) {
          Alert.alert('エラー', 'ラベルの取得に失敗しました', [{ text: 'OK' }]);
        }
      };

      loadData();
    }, [])
  );

  const handleAllMemoPress = () => {
    setSelectedLabelId(undefined);
    router.push({ pathname: '/memos' });
  };

  const handleLabelPress = (labelId: number) => {
    setSelectedLabelId(labelId);
    router.push({ pathname: '/memos' });
  };

  const handleAddLabelPress = () => {
    router.push({ pathname: '/labels/create' });
  };

  const handleEditLabelPress = (labelId: number) => {
    router.push({ pathname: `/labels/${labelId}` });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <ListItem bottomDivider onPress={handleAllMemoPress}>
          <ListItem.Content>
            <ListItem.Title>全てのメモ</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <Text style={styles.sectionText}>ラベル</Text>

        {labels.map(item => (
          <LabelListItem
            key={item.id}
            color={item.color}
            name={item.name}
            onPress={() => handleLabelPress(item.id)}
            onEditPress={() => handleEditLabelPress(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'EFEFF4'
  },
  sectionText: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 14,
    fontSize: 14,
    color: '707070'
  }
});
