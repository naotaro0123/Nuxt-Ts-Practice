export * from './state';

export interface Books {
  id: number;
  book: Book[];
}

export interface Book {
  id?: number;
  volumeInfo?: VolumeInfo;
}

interface VolumeInfo {
  title: string;
  description?: string;
  imageLinks?: ImageLinks;
}

interface ImageLinks {
  smallThumbnail: boolean;
}
