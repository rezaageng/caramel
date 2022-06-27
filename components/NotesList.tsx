import { Pressable, Text } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import { NotesListProps } from '../types/notes';

interface IProps extends NotesListProps {
  // eslint-disable-next-line no-unused-vars
  deleteNote: (id: string) => void;
}

function NotesList({ id, title, note, date, deleteNote }: IProps) {
  return (
    <Pressable
      style={NotesListStyle.wrapper}
      onLongPress={() => deleteNote(id)}
    >
      <Text
        style={{
          ...AppStyle.textColor,
          ...NotesListStyle.title,
          ...NotesListStyle.child,
        }}
      >
        {title}
      </Text>
      <Text
        style={{ ...AppStyle.textColor, ...NotesListStyle.child }}
        numberOfLines={1}
      >
        {note}
      </Text>
      <Text style={{ ...AppStyle.textColor, ...NotesListStyle.child }}>
        {date}
      </Text>
    </Pressable>
  );
}

export default NotesList;
