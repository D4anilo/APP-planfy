import { Stack } from 'expo-router';

export default function Layout() {
    return (
      <Stack>
        <Stack.Screen name="index" options={{title: "Logar", headerShown: false}} />
        <Stack.Screen name="cadastro" options={{title: "Criar Conta", headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        {/* <Stack.Screen name="user" options={{title: "User", headerShown: false}} /> */}
      </Stack>
    );
  }