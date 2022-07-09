import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import Header from '../components/Header';
import Nothing from '../components/Nothing';
import TodosList from '../components/TodoList';
import TodosModal from '../components/TodoModal';
import DeleteConfirm from '../components/DeleteConfirm';
import AppStyle from '../style/App.style';
import { PopupProps, TodosListProps } from '../types/notes';

function Todo() {
  const [todos, setTodos] = useState<TodosListProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [popup, setPopup] = useState<PopupProps>({ id: '', delete: false });
  const [editId, setEditId] = useState<string>('');

  // async storage
  const storeData = async (val: TodosListProps[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(val));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('todos');
      if (value !== null) {
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  // handle delete
  const handleDelete = (id: string) => {
    setPopup({ id, delete: true });
  };

  // delete todo
  const deleteTodo = () => {
    if (popup.delete && popup.id)
      setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== popup.id));

    setPopup({ id: '', delete: false });
  };

  // cancel delete
  const cancelDelete = () => {
    setPopup({ id: '', delete: false });
  };

  // edit todos state
  const editTodo = (id: string, todo: string, checked: boolean) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      const index = newTodos.findIndex((newTodo) => newTodo.id === id);

      if (checked !== newTodos[index].checked) {
        newTodos[index].checked = checked;
      } else {
        newTodos[index] = {
          id,
          todo,
          checked,
          date: format(new Date(), 'MMMM do, yyyy H:mma'),
        };
      }

      return newTodos;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <Header setModalOpen={setModalOpen} />
      <TodosModal
        modalOpen={modalOpen}
        editId={editId}
        todos={todos}
        setModalOpen={setModalOpen}
        setEditId={setEditId}
        setTodos={setTodos}
        editTodo={editTodo}
      />
      <DeleteConfirm
        popup={popup.delete}
        deleteNote={deleteTodo}
        cancelDelete={cancelDelete}
      />
      {todos.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          {[...todos].reverse().map((todo) => (
            <TodosList
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              date={todo.date}
              checked={todo.checked}
              setModalOpen={setModalOpen}
              handleDelete={handleDelete}
              setEditId={setEditId}
              editTodo={editTodo}
            />
          ))}
        </ScrollView>
      ) : (
        <Nothing />
      )}
    </SafeAreaView>
  );
}

export default Todo;
