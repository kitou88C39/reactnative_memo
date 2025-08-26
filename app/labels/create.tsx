//ラベル画面作成
import { Input, InputField, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ColorPicker } from '../../src/components/ColorPicker';

export default function LabelCreateScreen() {
  const [labelName, setLabelName] = useState<String>('');
  const [color, setColor] = useState<String | undefined>(undefined);

  const handleColorPress = (color: string) => {
    setColor(color);
  };

  const handleCreatePress = () => {
    router.dismiss();
  };
  return (
    <View style={styles.container}>
      <VStack space="lg">
        <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
          <InputField padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
        </Input>
        <ColorPicker onPress={handleColorPress} />
        <Button title="作成" onPress={handleCreatePress} />
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
