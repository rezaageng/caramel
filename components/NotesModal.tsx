import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import NotesModalStyle from '../style/NotesModal.style';
import { NotesListProps } from '../types/notes';

interface IProps {
  modalOpen: boolean;
  editId: string;
  notes: NotesListProps[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setNotes: Dispatch<SetStateAction<NotesListProps[]>>;
  setEditId: Dispatch<SetStateAction<string>>;
  editNote: (id: string, title: string, note: string) => void;
}

interface IPrevState {
  title: string;
  note: string;
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
  const initialPrevNote: IPrevState = {
    title: '',
    note: '',
  };

  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [pendingText, setPendingText] = useState<boolean>(false);
  const [prevNote, setPrevNote] = useState<IPrevState>(initialPrevNote);

  useEffect(() => {
    if (note.length > 0 && note.match(/\S/)) setButtonDisabled(false);
    if (
      (note === prevNote.note && title === prevNote.title) ||
      (title.length > 0 && note.length === 0)
    ) {
      setButtonDisabled(true);
      setIsPending(false);
    } else {
      setIsPending(true);
      setPendingText(false);
    }
  }, [note, title]);

  useEffect(() => {
    if (editId.length > 0) {
      const newNote = notes.find((_note) => _note.id === editId);
      if (newNote) {
        setTitle(newNote.title);
        setNote(newNote.note);
        setPrevNote({ title: newNote.title, note: newNote.note });
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
          date: format(new Date(), 'MMMM do, yyyy H:mma'),
        },
      ]);
    }
    setIsPending(false);
    setPendingText(false);
    setPrevNote(initialPrevNote);
    setEditId('');
    setTitle('');
    setNote('');
    setModalOpen(false);
    setButtonDisabled(true);
  };

  const onCancel = () => {
    if (isPending) {
      setIsPending(false);
      setPendingText(true);
    } else {
      setIsPending(false);
      setPrevNote(initialPrevNote);
      setPendingText(false);
      setEditId('');
      setTitle('');
      setNote('');
      setModalOpen(false);
    }
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
          {pendingText && (
            <Text style={NotesModalStyle.warningText}>
              are you sure? press again to close!
            </Text>
          )}
        </View>
      </View>
    </Modal>
  );
}

export default NotesModal;
