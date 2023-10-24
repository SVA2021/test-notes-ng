export type NotesTitlesT = {
  id: number;
  title: string;
};

export type NoteT = NotesTitlesT & {
  content: string
};
