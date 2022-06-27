import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import AppStyle from '../style/App.style';
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
    if (note.length > 0) setButtonDisabled(false);
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
    setModalOpen(false);
    setTitle('');
    setNote('');
  };

  return (
    <Modal transparent visible={modalOpen}>
      <View style={NotesModalStyle.modal}>
        <View style={NotesModalStyle.wrapper}>
          <View style={NotesModalStyle.inputWrapper}>
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
          </View>
          <View style={NotesModalStyle.buttonWrapper}>
            <Pressable
              style={{
                ...NotesModalStyle.button,
                ...NotesModalStyle.cancelButton,
              }}
              onPress={onCancel}
            >
              <Text style={AppStyle.textColor}>Cancel</Text>
            </Pressable>
            <Pressable
              style={
                buttonDisabled
                  ? {
                      ...NotesModalStyle.button,
                      ...NotesModalStyle.saveButtonDisabled,
                    }
                  : {
                      ...NotesModalStyle.button,
                      ...NotesModalStyle.saveButton,
                    }
              }
              onPress={onSave}
              disabled={buttonDisabled}
            >
              <Text style={AppStyle.textColor}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NotesModal;
