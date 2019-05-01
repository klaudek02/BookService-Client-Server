import {Comment} from './comment.model';


export class News {
  _id: string;
  userId: string;
  topic: string;
  comments: Comment[];
  description: string;
  postedDate: Date;
}
