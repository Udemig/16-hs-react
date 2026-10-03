export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export interface NoteValues extends Omit<Note, "id"> {}
