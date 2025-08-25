export interface IBook {
  title: string;
  _id: string;
  author: string;
  description?: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  available: boolean;
  copies: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBorrow {
  book: string;
  quantity: number;
  dueDate: Date;
}

export interface IBorrowBook {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}
