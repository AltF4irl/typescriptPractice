import axios from 'axios';
import { NonSensitiveDiaryEntries } from '../types';
const baseURL = 'http://localhost:3004/api/diaries';

const getAll = async () => {
  const res = await axios.get<NonSensitiveDiaryEntries[]>(baseURL);
  return res.data;
};

export default {
  getAll,
};
