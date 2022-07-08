import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import TodoListStyle from '../style/TodoList.style';
import { TodosListProps } from '../types/notes';

function TodosList({ id, todo, date }: TodosListProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View style={{ ...NotesListStyle.wrapper, ...TodoListStyle.wrapper }}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color="#ff369e"
        style={TodoListStyle.checkbox}
      />
      <View style={TodoListStyle.todoWrapper}>
        <Text
          style={
            isChecked
              ? TodoListStyle.todoChecked
              : { ...AppStyle.textColor, ...NotesListStyle.title }
          }
        >
          {todo}
        </Text>
        <Text
          style={isChecked ? TodoListStyle.dateChecked : AppStyle.textColor}
        >
          {date}
        </Text>
      </View>
    </View>
  );
}

export default TodosList;
