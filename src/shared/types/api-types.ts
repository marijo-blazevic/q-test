export type PostParams = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type UserParams = {
  id: number;
  name: string;
};

export type CommentsParams = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
