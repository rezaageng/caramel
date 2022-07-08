import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import TodoListStyle from '../style/TodoList.style';
import { TodosListProps } from '../types/notes';

interface IProps extends TodosListProps {
  // setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleDelete: (id: string) => void;
  // setEditId: Dispatch<SetStateAction<string>>;
}

function TodosList({ id, todo, date, checked, handleDelete }: IProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const checkedHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      onLongPress={() => handleDelete(id)}
      style={{ ...NotesListStyle.wrapper, ...TodoListStyle.wrapper }}
    >
      <Checkbox
        value={isChecked}
        onValueChange={checkedHandler}
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
    </Pressable>
  );
}

export default TodosList;
