//ラベル修正画面
import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Input, InputField } from '@gluestack-ui/themed';
import { useState } from 'react';

export default function LabelEditScreen() {
  const { id } = useLocalSearchParams();

  const [labelName, setLabelName] = useState<String>('');

  const handleEditPress = () => {
    router.dismiss();
  };
  return (
    <View style={styles.container}>
      <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
        <InputField padding={'$2'} placeholder="ラベル名" onChangeText={setLabelName} />
      </Input>
      <Button title="修正" onPress={handleEditPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
