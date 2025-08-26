//ラベル修正画面
import { Input, InputField, VStack } from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ColorPicker } from '../../src/components/ColorPicker';

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
  return (
    <View style={styles.container}>
      <VStack space="lg">
        <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
          <InputField padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
        </Input>
        <ColorPicker onPress={handleColorPress} />
        <Button title="修正" onPress={handleEditPress} />
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
