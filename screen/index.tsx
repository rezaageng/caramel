import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import NotesList from '../components/NotesList';
import Header from '../components/Header';
import { NotesListProps, PopupProps } from '../types/notes';
import NotesModal from '../components/NotesModal';
import Nothing from '../components/Nothing';
import DeleteConfirm from '../components/DeleteConfirm';
import AppStyle from '../style/App.style';

function Home() {
  const [notes, setNotes] = useState<NotesListProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');
  const [popup, setPopup] = useState<PopupProps>({ id: '', delete: false });

  // async storage
  const storeData = async (val: NotesListProps[]) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(val));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('notes');
      if (value !== null) {
        setNotes(JSON.parse(value));
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

  // delete note
  const deleteNote = () => {
    if (popup.delete && popup.id)
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== popup.id));

    setPopup({ id: '', delete: false });
  };

  // cancel delete
  const cancelDelete = () => {
    setPopup({ id: '', delete: false });
  };

  // edit notes state
  const editNote = (id: string, title: string, note: string) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      const index = newNotes.findIndex((newNote) => newNote.id === id);
      newNotes[index] = {
        id,
        title: title || 'Untitled',
        note,
        date: format(new Date(), 'MMMM do, yyyy h:mma'),
      };
      return newNotes;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(notes);
  }, [notes]);

  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <NotesModal
        modalOpen={modalOpen}
        editId={editId}
        notes={notes}
        setModalOpen={setModalOpen}
        setNotes={setNotes}
        setEditId={setEditId}
        editNote={editNote}
      />
      <DeleteConfirm
        popup={popup.delete}
        deleteNote={deleteNote}
        cancelDelete={cancelDelete}
      />
      <Header setModalOpen={setModalOpen} />
      {notes.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          {[...notes].reverse().map((note) => (
            <NotesList
              key={note.id}
              id={note.id}
              title={note.title}
              note={note.note}
              date={note.date}
              setModalOpen={setModalOpen}
              handleDelete={handleDelete}
              setEditId={setEditId}
            />
          ))}
        </ScrollView>
      ) : (
        <Nothing />
      )}
    </SafeAreaView>
  );
}

export default Home;
