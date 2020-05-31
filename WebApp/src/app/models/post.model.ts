import { Comment } from "./Comment.model";
export class Post  {

    public _id: number;
    public title: string;
    public link: string;
    public __v: number;
    public comments: Comment[];
    public upvotes: number;
  }