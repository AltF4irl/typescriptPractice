import { useState } from 'react';
import { Visibility, Weather, newDiaryEntry } from '../types';

interface DiaryFormProps {
  addDiary: (entry: newDiaryEntry) => Promise<void>;
}

const DiaryForm = (props: DiaryFormProps) => {
  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
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
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        visibility: great
        <input
          name="visibility"
          type="radio"
          onChange={() => setVisibility(Visibility.Great)}
          defaultChecked
        />
        good
        <input
          name="visibility"
          type="radio"
          onChange={() => setVisibility(Visibility.Good)}
        />
        ok
        <input
          name="visibility"
          type="radio"
          onChange={() => setVisibility(Visibility.Ok)}
        />
        poor
        <input
          name="visibility"
          type="radio"
          onChange={() => setVisibility(Visibility.Poor)}
        />
      </div>
      <div>
        weather Sunnny
        <input
          name="weather"
          type="radio"
          onChange={() => setWeather(Weather.Sunny)}
          defaultChecked
        />
        Rainy
        <input
          name="weather"
          type="radio"
          onChange={() => setWeather(Weather.Rainy)}
        />
        Cloudy
        <input
          name="weather"
          type="radio"
          onChange={() => setWeather(Weather.Cloudy)}
        />
        Stormy
        <input
          name="weather"
          type="radio"
          onChange={() => setWeather(Weather.Stormy)}
        />
        Windy
        <input
          name="weather"
          type="radio"
          onChange={() => setWeather(Weather.Windy)}
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
