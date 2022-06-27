import { Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import { NotesListProps } from '../types/notes';

function NotesList({ title, note, date }: NotesListProps) {
  return (
    <View style={NotesListStyle.wrapper}>
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
    </View>
  );
}

export default NotesList;
