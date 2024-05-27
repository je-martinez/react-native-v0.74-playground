import { usePathname, useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function NavigationContainer() {
  const { push } = useRouter();
  const route = usePathname();

  console.log(route);

  return (
    <View style={styles.container}>
      <Button title="/" onPress={() => push("/(home)/(tabs)")} />
      <Button title="/explore" onPress={() => push("/(home)/(tabs)/explore")} />
      <Button
        title="/customers"
        onPress={() => push("/(northwind)/(tabs)/customers")}
      />
      <Button
        title="/orders"
        onPress={() => push("/(northwind)/(tabs)/orders")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});
