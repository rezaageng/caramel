import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotesList from '../components/NotesList';
import HomeStyle from '../style/Home.style';
import Header from '../components/Header';
import { NotesListProps } from '../types/notes';
import NotesModal from '../components/NotesModal';
import Nothing from '../components/Nothing';

function Home() {
  const [notes, setNotes] = useState<NotesListProps[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>('');

  const deleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // edit notes state
  const editNote = (id: string, title: string, note: string) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      const index = newNotes.findIndex((newNote) => newNote.id === id);
      newNotes[index] = {
        id,
        title,
        note,
        date: new Date().toLocaleDateString(),
      };
      return newNotes;
    });
  };

  return (
    <SafeAreaView style={HomeStyle.wrapper}>
      <NotesModal
        modalOpen={modalOpen}
        editId={editId}
        notes={notes}
        setModalOpen={setModalOpen}
        setNotes={setNotes}
        setEditId={setEditId}
        editNote={editNote}
      />
      <Header setModalOpen={setModalOpen} />
      <ScrollView>
        {notes.length > 0 ? (
          [...notes]
            .reverse()
            .map((note) => (
              <NotesList
                key={note.id}
                id={note.id}
                title={note.title}
                note={note.note}
                date={note.date}
                setModalOpen={setModalOpen}
                deleteNote={deleteNote}
                setEditId={setEditId}
              />
            ))
        ) : (
          <Nothing />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
