import { StyleSheet } from 'react-native';

const TodoListStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 999,
  },
  todoWrapper: {
    marginLeft: 16,
  },
  todoChecked: {
    textDecorationLine: 'line-through',
    color: '#6e6e6e',
    fontWeight: 'bold',
  },
  dateChecked: {
    textDecorationLine: 'line-through',
    color: '#6e6e6e',
  },
});

export default TodoListStyle;
