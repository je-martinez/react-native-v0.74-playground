import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Comment } from "../types";
import { Image } from "expo-image";

interface Props {
  item: Comment;
}

export default function CommentItem({ item: comment }: Props) {
  return (
    <View style={styles.container}>
      {/* User avatar (replace with placeholder or fetch image) */}
      <Image
        source={`https://i.pravatar.cc/300?u=${comment.email}`}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{comment.name}</Text>
        <Text style={styles.body}>{comment.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: "#333",
  },
});
