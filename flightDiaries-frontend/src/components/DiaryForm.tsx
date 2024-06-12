import { useState } from 'react';
import { Visibility, Weather, newDiaryEntry } from '../types';

interface DiaryFormProps {
  addDiary: (entry: newDiaryEntry) => Promise<void>;
}

const DiaryForm = (props: DiaryFormProps) => {
  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Poor);
  const [weather, setWeather] = useState<Weather>(Weather.Cloudy);
  const [comment, setComment] = useState<string>('');

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(date, visibility, weather, comment);
    const newEntry = {
      date,
      visibility,
      weather,
      comment: comment,
    };

    props.addDiary(newEntry);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        visibility:
        <input
          type="text"
          value={visibility}
          onChange={(e) => setVisibility(e.target.value as Visibility)}
        />
      </div>
      <div>
        weather
        <input
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value as Weather)}
        />
      </div>
      <div>
        comment
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default DiaryForm;
