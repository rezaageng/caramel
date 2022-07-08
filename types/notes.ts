export interface NotesListProps {
  id: string;
  title: string;
  note: string;
  date: string;
}

export interface TodosListProps {
  id: string;
  todo: string;
  date: string;
  checked: boolean;
}

export interface PopupProps {
  id: string;
  delete: boolean;
}
