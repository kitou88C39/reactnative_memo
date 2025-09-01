//ラベル修正画面
import { Button, ButtonText, Input, InputField, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { ColorPicker } from '../../src/components/ColorPicker';

import * as LabelService from '../../src/services/labelServices';

export default function LabelEditScreen() {
  const { id } = useLocalSearchParams();

  const [labelName, setLabelName] = useState<string>('');
  const [color, setColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;
    const loadData = async (labelId: number) => {
      try {
        const label = await LabelService.getLabel(labelId);
        if (!label) {
          Alert.alert('エラー', 'ラベルが見つかりません', [{ text: 'OK', onPress: () => router.back() }]);
          return;
        }
        setLabelName(label.name);
        setColor(label.color);
      } catch (error) {
        Alert.alert('エラー', 'データの取得に失敗しました', [{ text: 'OK', onPress: () => router.back() }]);
      }
    };
    if (isMounted) {
      const labelId = Number(id);
      loadData(labelId);
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleColorPress = (color: string) => {
    setColor(color);
  };

  const handleEditPress = () => {
    if (!labelName) {
      Alert.alert('エラー', 'ラベル名を入力してください');
      return;
    }
    if (!color) {
      Alert.alert('エラー', 'カラーを選択してください');
      return;
    }

    setIsLoading(true);

    try {
      await LabelService.addLable(labelName, color);
      router.dismiss();
    } catch (error) {
      Alert.alert('エラー', 'ラベル作成に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePress = () => {
    router.dismiss();
  };

  return (
    <View style={styles.container}>
      <VStack space="lg">
        <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
          <InputField defaultValue={labelName} padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
        </Input>
        <ColorPicker onPress={handleColorPress} defaultColor={color} />

        <VStack space="md">
          <Button size="md" action="primary" marginHorizontal={'$4'} onPress={handleEditPress}>
            <ButtonText>修正</ButtonText>
          </Button>

          <Button size="md" action="negative" marginHorizontal={'$4'} onPress={handleDeletePress}>
            <ButtonText>削除</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
