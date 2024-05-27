import { usePathname, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function NavigationContainer() {
  const { push } = useRouter();
  const route = usePathname();

  console.log({ route });

  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => push("/(northwind)/(tabs)/customers")}
      />
    </View>
  );
}
