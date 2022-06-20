export type Quote = { 
  _id: string;
  tags: Array<string>;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}
