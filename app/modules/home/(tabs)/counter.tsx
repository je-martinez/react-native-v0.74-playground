import { Button, Text, StyleSheet, TextInput, View } from "react-native";

import { useCounter } from "@/app/modules/home/hooks";
import ParallaxScrollView from "@/ui/components/ParallaxScrollView";
import { ThemedText } from "@/ui/components/ThemedText";
import { ThemedView } from "@/ui/components/ThemedView";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    value: yup.number().required(),
  })
  .required();

export default function HomeScreen() {
  const {
    counter,
    incrementCounter,
    incrementCounterByAmount,
    decreaseCounter,
  } = useCounter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      value: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    const { value } = data;
    incrementCounterByAmount(value);
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="calculator" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Counter App</ThemedText>
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
          <Controller
            control={control}
            name="value"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.counterInput}
                onBlur={onBlur}
                keyboardType="number-pad"
                onChangeText={onChange}
                value={`${value}`}
              />
            )}
          />
          {errors.value && (
            <Text style={styles.errorMessage}>This is required.</Text>
          )}
          <Button title="Increase counter by amount" onPress={onSubmit} />
        </View>
      </ThemedView>
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
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  errorMessage: {
    marginTop: 8,
    color: "red",
    fontSize: 12,
    textAlign: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
