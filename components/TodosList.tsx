import { Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import { TodosListProps } from '../types/notes';

function TodosList({ id, todo, date }: TodosListProps) {
  return (
    <View style={NotesListStyle.wrapper}>
      <Text style={{ ...AppStyle.textColor, ...NotesListStyle.title }}>
        {todo}
      </Text>
      <Text style={AppStyle.textColor}>{date}</Text>
    </View>
  );
}

export default TodosList;
