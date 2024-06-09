import toNewDiaryEntry from '../utils';
import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(diaryService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (err: unknown) {
    let errorMessage = 'Something went wrong.';
    if (err instanceof Error) {
      errorMessage += ' Error: ' + err.message;
    }
    res.status(400).json({ error: errorMessage });
  }
});

router.get('/:id', (req, res) => {
  const id: number = Number(req.params.id);
  const diary = diaryService.findById(id);
  if (diary) {
    res.json(diary);
  } else {
    res.status(400).json({ error: 'id doesnt exist' });
  }
});

export default router;
