import { Dispatch, SetStateAction } from 'react';
import { Pressable, Text } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import { NotesListProps } from '../types/notes';

interface IProps extends NotesListProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  deleteNote: (id: string) => void;
  setEditId: Dispatch<SetStateAction<string>>;
}

function NotesList({
  id,
  title,
  note,
  date,
  setModalOpen,
  deleteNote,
  setEditId,
}: IProps) {
  return (
    <Pressable
      style={NotesListStyle.wrapper}
      android_ripple={{ color: '#3d3d3d', radius: 170 }}
      android_disableSound
      onLongPress={() => deleteNote(id)}
      onPress={() => {
        setEditId(id);
        setModalOpen(true);
      }}
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
