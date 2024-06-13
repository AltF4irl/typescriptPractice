import { useEffect, useState } from 'react';
import './App.css';
import { NonSensitiveDiaryEntries, newDiaryEntry } from './types';
import diaryService from './services/diaryService';
import Diary from './components/Diary';
import DiaryForm from './components/DiaryForm';
import axios from 'axios';

interface Notification {
  visible: boolean;
  message: string;
}

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntries[]>([]);
  const [notification, setNotification] = useState<Notification>({
    visible: false,
    message: '',
  });

  useEffect(() => {
    diaryService.getAll().then((diaries) => setDiaries(diaries));
  }, []);

  const addDiary = async (entry: newDiaryEntry) => {
    try {
      const res = await diaryService.create(entry);
      setDiaries(diaries.concat(res));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
        setNotification({
          visible: true,
          message: err.response?.data.error,
        });
        setTimeout(() => {
          setNotification({
            visible: false,
            message: '',
          });
        }, 5000);
      }
    }
  };

  const notificationBar = () => {
    return <div>{notification.message}</div>;
  };

  return (
    <div>
      <h2>Add new entry</h2>
      {notification.visible && notificationBar()}
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
