import { Post } from "./post.model";

export class Comment  {

  public _id: number;
  public post: number;
  public body: string;
  public author: string;
  public upvote: number;
  public __v: number;
  

}