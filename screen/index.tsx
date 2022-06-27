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
  const [modalOpen, setModalOpen] = useState(false);

  console.log(notes);

  return (
    <SafeAreaView style={HomeStyle.wrapper}>
      <NotesModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setNotes={setNotes}
      />
      <Header setModalOpen={setModalOpen} />
      <ScrollView>
        {notes.length > 0 ? (
          notes.reverse().map((note, i) => (
            <NotesList
              // eslint-disable-next-line react/no-array-index-key
              key={`notes${i}`}
              title={note.title}
              note={note.note}
              date={note.date}
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
