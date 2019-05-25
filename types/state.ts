// eslint-disable-next-line no-unused-vars
import { Books, Book } from '~/types';

export interface RootState {
  books: Books[];
  book: Book;
  query: string;
}
