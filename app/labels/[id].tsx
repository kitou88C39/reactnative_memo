//ラベル修正画面
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LabelEditScreen() {
  const { id } = useLocalSearchParams;

  const handleEditPress = () => {
    router.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>ラベル修正: {id}</Text>
      <Button title="修正" onPress={handleEditPress} />
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
