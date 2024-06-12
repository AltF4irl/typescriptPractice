import { useEffect, useState } from 'react';
import './App.css';
import { NonSensitiveDiaryEntries, newDiaryEntry } from './types';
import diaryService from './services/diaryService';
import Diary from './components/Diary';
import DiaryForm from './components/DiaryForm';

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntries[]>([]);

  useEffect(() => {
    diaryService.getAll().then((diaries) => setDiaries(diaries));
  }, []);

  const addDiary = async (entry: newDiaryEntry) => {
    const res = await diaryService.create(entry);
    setDiaries(diaries.concat(res));
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <DiaryForm addDiary={addDiary} />
      <h2>Diary entries</h2>
      {diaries.map((diary) => (
        <Diary
          key={diary.id}
          diary={diary}
        />
      ))}
    </div>
  );
}

export default App;
