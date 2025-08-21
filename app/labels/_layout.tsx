import { Stack } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="create"
        options={{
          headerTitle: 'ラベル作成',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Text>閉じる</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          headerTitle: 'ラベル作成',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.dismiss()}>
              <Text>閉じる</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  );
}
