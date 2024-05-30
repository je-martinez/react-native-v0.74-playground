import { Image, StyleSheet, Button, TextInput, View } from "react-native";

import { HelloWave } from "@/app/modules/home/components/HelloWave";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { useCounter } from "@/app/modules/home/hooks";
import { useState } from "react";
import NavigationContainer from "@/ui/components/NavigationContainer";

export default function HomeScreen() {
  const {
    counter,
    incrementCounter,
    incrementCounterByAmount,
    decreaseCounter,
  } = useCounter();

  const [text, setText] = useState("");

  const onIncrementCounterByAmount = () => {
    if (isNaN(Number(text))) return;
    incrementCounterByAmount(Number(text));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={{ textAlign: "center" }}>
          {counter}
        </ThemedText>
        <View style={styles.counterContainer}>
          <Button title="Increase counter" onPress={incrementCounter} />
          <Button title="Decrease counter" onPress={decreaseCounter} />
        </View>
        <View>
          <TextInput
            style={styles.counterInput}
            keyboardType="number-pad"
            onChangeText={setText}
          />
          <Button
            title="Increase counter by amount"
            onPress={onIncrementCounterByAmount}
          />
        </View>
      </ThemedView>
      <NavigationContainer />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  counterInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
