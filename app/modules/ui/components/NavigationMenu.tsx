import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Text, StyleSheet, Pressable } from "react-native";

export default function NavigationMenu() {
  const { push } = useRouter();

  return (
    <Pressable
      style={styles.floatingButton}
      onPress={() => push("/modules/shared/navigation")}
    >
      <Ionicons name="location" size={30} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {},
  floatingButton: {
    backgroundColor: "#0ea5e9",
    color: "white",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    top: 100,
    right: 10,
    zIndex: 100,
  },
  floatingButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
