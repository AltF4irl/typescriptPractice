import { Visibility, Weather, newDiaryEntry } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect of missing comment');
  }
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date' + date);
  }
  return date;
};

const isWeather = (str: string): str is Weather => {
  return Object.values(Weather)
    .map((v) => v.toString())
    .includes(str);
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('Incorrect or missing Weather' + weather);
  }
  return weather;
};

const isVisibility = (str: string): str is Visibility => {
  return Object.values(Visibility)
    .map((value) => value.toString())
    .includes(str);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('Wrong or missing Visibility' + visibility);
  }
  return visibility;
};

const toNewDiaryEntry = (object: unknown): newDiaryEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'comment' in object &&
    'date' in object &&
    'visibility' in object &&
    'weather' in object
  ) {
    const newEntry: newDiaryEntry = {
      comment: parseComment(object.comment),
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
    };
    return newEntry;
  }
  throw new Error('Some fileds are missing');
};

export default toNewDiaryEntry;
