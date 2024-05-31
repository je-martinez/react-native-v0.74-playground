import { Comment } from "./comments.types";
import { User } from "./users.types";

interface PostRelations {
  user?: User;
  comments?: Comment[];
}

export interface Post extends PostRelations {
  userId: number;
  id: number;
  title: string;
  body: string;
}
