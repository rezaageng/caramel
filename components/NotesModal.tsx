import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Pressable, Text, TextInput, View } from 'react-native';
import AppStyle from '../style/App.style';
import NotesModalStyle from '../style/NotesModal.style';
import { NotesListProps } from '../types/notes';

interface IProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setNotes: Dispatch<SetStateAction<NotesListProps[]>>;
}

function NotesModal({ modalOpen, setModalOpen, setNotes }: IProps) {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (note.length > 0) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [note]);

  const onSave = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        title: title || 'Untitled',
        note,
        date: new Date().toLocaleDateString(),
      },
    ]);
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
