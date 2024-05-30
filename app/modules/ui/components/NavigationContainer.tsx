import { usePathname, useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function NavigationContainer() {
  const { push } = useRouter();

  return (
    <View style={styles.container}>
      <Button title="/modules/home" onPress={() => push("/modules/home")} />
      <Button
        title="/modules/home/explore"
        onPress={() => push("/modules/home/explore")}
      />
      <Button
        title="/modules/northwind/customers"
        onPress={() => push("/modules/northwind/customers")}
      />
      <Button
        title="/modules/northwind/orders"
        onPress={() => push("/modules/northwind/orders")}
      />
      <Button
        title="/modules/json-placeholder/"
        onPress={() => push("/modules/json-placeholder/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
});
