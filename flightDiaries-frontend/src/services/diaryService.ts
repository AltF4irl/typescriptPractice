import axios from 'axios';
import { DiaryEntry, NonSensitiveDiaryEntries, newDiaryEntry } from '../types';
const baseURL = 'http://localhost:3004/api/diaries';

const getAll = async () => {
  const res = await axios.get<NonSensitiveDiaryEntries[]>(baseURL);
  return res.data;
};

const create = async (entry:newDiaryEntry) => {
  const res = await axios.post<DiaryEntry>(baseURL, entry)
  return res.data
}

export default {
  getAll,
  create
};
