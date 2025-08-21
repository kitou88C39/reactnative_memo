import { Stack } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="create" options={{ headerTitle: 'ラベル作成', headerLeft: () =>
        <TouchableOpacity>
          <Text></Text>
      </TouchableOpacity>
  )}}
</Stack>
