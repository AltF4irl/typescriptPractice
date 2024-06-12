import { useEffect, useState } from 'react';
import './App.css';
import { NonSensitiveDiaryEntries } from './types';
import diaryService from './services/diaryService';
import Diary from './components/Diary';

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntries[]>([]);

  useEffect(() => {
    diaryService.getAll().then(diaries => setDiaries(diaries))
  }, []);

  return (
    <div>
      <h2>Diary entries</h2>
      {diaries.map((diary) => <Diary key={diary.id} diary={diary} />)}
    </div>
  );
}

export default App;
