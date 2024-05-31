import { HttpServer } from "@/shared/types";
import { Post } from "./posts.types";
import { Comment } from "./comments.types";
import { User } from "./users.types";

const jsonPlaceholderApi = "https://jsonplaceholder.typicode.com";

export class JsonPlaceholderApi extends HttpServer {
  constructor() {
    super("jsonPlaceholder", jsonPlaceholderApi);
  }
  async fetchPosts() {
    return this.instance.get<Post[]>("/posts");
  }
  async fetchComments() {
    return this.instance.get<Comment[]>("/comments");
  }
  async fetchUsers() {
    return this.instance.get<User[]>("/users");
  }
}
