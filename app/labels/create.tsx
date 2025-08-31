//ラベル画面作成
import { Button, ButtonText, Input, InputField, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { ColorPicker } from '../../src/components/ColorPicker';
import { Indicator } from '../../src/components/Indicator';
import * as LabelService from '../../src/services/labelServices';

export default function LabelCreateScreen() {
  const [labelName, setLabelName] = useState<string>('');
  const [color, setColor] = useState<string | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleColorPress = (color: string) => {
    setColor(color);
  };

  const handleCreatePress = async () => {
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

  return (
    <View style={styles.container}>
      <VStack space="lg">
        <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
          <InputField padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
        </Input>
        <ColorPicker onPress={handleColorPress} />

        <Button size="md" action="primary" marginHorizontal={'$4'} onPress={handleCreatePress}>
          <ButtonText>作成</ButtonText>
        </Button>
      </VStack>
      <Indicator visible={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
