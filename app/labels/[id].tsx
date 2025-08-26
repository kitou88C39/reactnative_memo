//ラベル修正画面
import { Input, InputField, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorPicker } from '../../src/components/ColorPicker';
import { Button, ButtonText } from '@gluestack-ui/themed';

export default function LabelEditScreen() {
  const { id } = useLocalSearchParams();

  const [labelName, setLabelName] = useState<String>('');
  const [color, setColor] = useState<String | undefined>(undefined);

  const handleColorPress = (color: string) => {
    setColor(color);
  };

  const handleEditPress = () => {
    router.dismiss();
  };

  const handleDeletePress = () => {
    router.dismiss();
  };

  return (
    <View style={styles.container}>
      <VStack space="lg">
        <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
          <InputField padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
        </Input>
        <ColorPicker onPress={handleColorPress} />

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
