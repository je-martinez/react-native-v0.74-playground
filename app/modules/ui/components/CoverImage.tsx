import { Image, ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

interface Props {
  source: ImageSource | string | number | ImageSource[] | string[] | null;
  blurhash: string;
}

export default function CoverImage({ source, blurhash }: Props) {
  return (
    <Image
      style={styles.reactLogo}
      source={source}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
