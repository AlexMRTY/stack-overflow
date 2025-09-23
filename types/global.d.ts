interface Question {
  _id: string;
  title: string;
  description: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string };
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}
