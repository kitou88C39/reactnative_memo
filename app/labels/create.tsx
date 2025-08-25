//ラベル画面作成
import { router } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input, InputField } from '@gluestack-ui/themed';

export default function LabelCreateScreen() {
  const handleCreatePress = () => {
    router.dismiss();
  };
  return (
    <View style={styles.container}>
      <Input variant="underlined" size="md" backgroundColor="$white" borderBlockColor="$warmGray400">
        <InputField padding={'$2'} placeholder="ラベル名" onChangeText={} />
      </Input>
      <Button title="作成" onPress={handleCreatePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  }
});
