import { Ionicons } from '@expo/vector-icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import NotesModalStyle from '../style/NotesModal.style';
import { NotesListProps } from '../types/notes';

interface IProps {
  modalOpen: boolean;
  editId: string;
  notes: NotesListProps[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setNotes: Dispatch<SetStateAction<NotesListProps[]>>;
  setEditId: Dispatch<SetStateAction<string>>;
  // eslint-disable-next-line no-unused-vars
  editNote: (id: string, title: string, note: string) => void;
}

function NotesModal({
  modalOpen,
  editId,
  notes,
  setModalOpen,
  setNotes,
  setEditId,
  editNote,
}: IProps) {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (note.length > 0 && note.match(/\S/)) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [note]);

  useEffect(() => {
    if (editId.length > 0) {
      const newNote = notes.find((_note) => _note.id === editId);
      if (newNote) {
        setTitle(newNote.title);
        setNote(newNote.note);
      }
    }
  }, [editId]);

  const onSave = () => {
    if (editId.length > 0) {
      editNote(editId, title, note);
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: `note${(Math.random() * 1000).toFixed(0)}`,
          title: title || 'Untitled',
          note,
          date: new Date().toLocaleDateString(),
        },
      ]);
    }
    setEditId('');
    setTitle('');
    setNote('');
    setModalOpen(false);
  };

  const onCancel = () => {
    setEditId('');
    setTitle('');
    setNote('');
    setModalOpen(false);
  };

  return (
    <Modal
      transparent
      visible={modalOpen}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={NotesModalStyle.modal}>
        <View style={NotesModalStyle.wrapper}>
          <View style={NotesModalStyle.buttonWrapper}>
            <Pressable android_disableSound onPress={onCancel}>
              <Ionicons name="arrow-back" size={28} color="#ff369e" />
            </Pressable>
            <Pressable
              android_disableSound
              onPress={onSave}
              disabled={buttonDisabled}
            >
              <Ionicons
                name="checkmark-sharp"
                size={28}
                color={buttonDisabled ? '#6b6b6b' : '#ff369e'}
              />
            </Pressable>
          </View>
          <ScrollView style={NotesModalStyle.inputWrapper}>
            <TextInput
              style={NotesModalStyle.textInput}
              placeholder="Title.."
              placeholderTextColor="#6e6e6e"
              selectionColor="#4338ca"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
            <TextInput
              style={{ ...NotesModalStyle.textInput, textAlignVertical: 'top' }}
              autoFocus
              multiline
              numberOfLines={10}
              placeholder="What happened today?"
              placeholderTextColor="#6e6e6e"
              selectionColor="#4338ca"
              value={note}
              onChangeText={(text) => setNote(text)}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default NotesModal;
