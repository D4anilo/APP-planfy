import { Stack } from "expo-router";

export default function Layout() {
    return (
    <Stack>
        <Stack.Screen name="OpScreens" options={{ title: "Index de usuário", headerShown: false }} />
    </Stack>
)
}