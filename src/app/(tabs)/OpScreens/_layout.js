import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "", headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                            <FontAwesome name="home" size={28} color={focused ? "#ffffff" : color} />
                        </View>
                    );
                }
            }} />

            <Tabs.Screen name="criarTarefas" options={{
                title: "", headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                            <FontAwesome name="plus" size={28} color={focused ? "#ffffff" : color} />
                        </View>
                    );
                }
            }} />

            <Tabs.Screen name="perfil" options={{
                title: "", headerShown: false, 
                tabBarIcon: ({ focused, color, size }) => {
                    return (
                        <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                            <FontAwesome name="user" size={28} color={focused ? "#ffffff" : color} />
                        </View>
                    );
                }
            }} />

        </Tabs>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 25, // 100% border radius
        backgroundColor: "#cccccc", // Default background color
        justifyContent: "center",
        alignItems: "center",
    },
    iconFocused: {
        backgroundColor: "#6381A8", // Background color when focused
    },

    Tabs:{
        backgroundColor: "#ffffff",
    }
});