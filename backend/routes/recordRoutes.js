import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { 
  createRecord, 
  getRecords, 
  updateRecord, 
  deleteRecord 
} from '../controllers/recordController.js';

const router = express.Router();

router.route('/')
  .post(protect, createRecord)
  .get(protect, getRecords);

router.route('/:id')
  .put(protect, updateRecord)
  .delete(protect, deleteRecord);

export default router;