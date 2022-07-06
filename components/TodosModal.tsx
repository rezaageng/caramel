import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Pressable, TextInput, View } from 'react-native';
import NotesModalStyle from '../style/NotesModal.style';
import { TodosListProps } from '../types/notes';

interface IProps {
  modalOpen: boolean;
  todos: TodosListProps[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setTodos: Dispatch<SetStateAction<TodosListProps[]>>;
}

function TodosModal({ modalOpen, todos, setModalOpen, setTodos }: IProps) {
  const [todo, setTodo] = useState<string>('');

  const saveHandler = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: `todo${(Math.random() * 1000).toFixed(0)}`,
        todo,
        date: format(new Date(), 'MMMM do, yyyy H:mma'),
      },
    ]);
    setModalOpen(false);
    setTodo('');
  };

  const cancelHandler = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      transparent
      visible={modalOpen}
      animationType="slide"
      onRequestClose={cancelHandler}
    >
      <View style={NotesModalStyle.modal}>
        <View style={NotesModalStyle.wrapper}>
          <View style={NotesModalStyle.buttonWrapper}>
            <Pressable android_disableSound onPress={cancelHandler}>
              <Ionicons name="arrow-back" size={28} color="#ff369e" />
            </Pressable>
            <Pressable
              android_disableSound
              onPress={saveHandler}
              // disabled={buttonDisabled}
            >
              <Ionicons
                name="checkmark-sharp"
                size={28}
                // color={buttonDisabled ? '#6b6b6b' : '#ff369e'}
              />
            </Pressable>
          </View>
          <View style={NotesModalStyle.inputWrapper}>
            <TextInput
              style={NotesModalStyle.textInput}
              placeholder="To do..."
              placeholderTextColor="#6e6e6e"
              selectionColor="#4338ca"
              value={todo}
              onChangeText={(text) => setTodo(text)}
            />
          </View>
          {/* {pendingText && (
            <Text style={NotesModalStyle.warningText}>
              are you sure? press again to close!
            </Text>
          )} */}
        </View>
      </View>
    </Modal>
  );
}

export default TodosModal;
