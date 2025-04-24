import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="index" options={{title: "Home"}} />
        <Stack.Screen name="criar_task.js" options={{title: "Criar Tarefas"}} />
        <Stack.Screen name="(tabs)" options={{title: "Tabs", headerShown: false}} />
      </Stack>
    );
  }