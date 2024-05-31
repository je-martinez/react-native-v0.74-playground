import { ThemedText } from "@/ui/components/ThemedText";
import { Post } from "../types";

interface Props {
  item: Post;
}

export default function PostItem({ item: post }: Props) {
  return (
    <>
      <ThemedText>{post.title}</ThemedText>
    </>
  );
}
