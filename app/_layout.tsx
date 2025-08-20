import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTintColor: '#0000000', headerStyle: { backgroundColor: '#F9F9F9' } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/*ホーム*/}
      <Stack.Screen name="home/index" options={{ headerTitle: 'ホーム' }} />
      {/*ラベル*/}
      <Stack.Screen name="home/index" options={{ headerTitle: 'ラベル' }} />
    </Stack>
  );
}
