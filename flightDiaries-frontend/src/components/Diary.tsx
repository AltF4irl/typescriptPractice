import { NonSensitiveDiaryEntries } from '../types';

interface DiaryProps {
  diary: NonSensitiveDiaryEntries;
}

const Diary = (props: DiaryProps) => {
  return (
    <div>
      <h3>{props.diary.date}</h3>
      <p>Visibility: {props.diary.visibility}</p>
      <p>Weather: {props.diary.weather}</p>
    </div>
  );
};

export default Diary;