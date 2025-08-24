export interface IBook {
  title: string;
  _id: string;
  author: string;
  genre: string;
  isbn: string;
  available: boolean;
  copies: number;
  createdAt: Date;
  updatedAt: Date;
}
