import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Nothing from '../components/Nothing';
import TodosList from '../components/TodosList';
import TodosModal from '../components/TodosModal';
import AppStyle from '../style/App.style';
import { TodosListProps } from '../types/notes';

function Todo() {
  const [todos, setTodos] = useState<TodosListProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <Header setModalOpen={setModalOpen} />
      <TodosModal
        modalOpen={modalOpen}
        todos={todos}
        setModalOpen={setModalOpen}
        setTodos={setTodos}
      />
      {todos.length > 0 ? (
        <ScrollView>
          {[...todos].reverse().map((todo) => (
            <TodosList
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              date={todo.date}
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
