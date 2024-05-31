import { Post } from "./posts.types";

interface CommentRelations {
  post?: Post;
}

export interface Comment extends CommentRelations {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
