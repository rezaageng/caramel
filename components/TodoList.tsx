import Checkbox from 'expo-checkbox';
import { Dispatch, SetStateAction, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesListStyle from '../style/NotesList.style';
import TodoListStyle from '../style/TodoList.style';
import { TodosListProps } from '../types/notes';

interface IProps extends TodosListProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  handleDelete: (id: string) => void;
  setEditId: Dispatch<SetStateAction<string>>;
  editTodo: (id: string, todo: string, checked: boolean) => void;
}

function TodosList({
  id,
  todo,
  date,
  checked,
  setModalOpen,
  handleDelete,
  setEditId,
  editTodo,
}: IProps) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const checkedHandler = () => {
    editTodo(id, todo, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      onLongPress={() => handleDelete(id)}
      onPress={() => {
        setEditId(id);
        setModalOpen(true);
      }}
      style={{ ...NotesListStyle.wrapper, ...TodoListStyle.wrapper }}
      android_ripple={{ color: '#3d3d3d', radius: 170 }}
      android_disableSound
    >
      <Checkbox
        value={checked}
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
