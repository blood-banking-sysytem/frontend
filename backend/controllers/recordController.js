import Record from '../models/Record.js';

export const createRecord = async (req, res) => {
  try {
    const { bloodType, condition, hospital, notes } = req.body;
    
    if (!bloodType || !condition || !hospital) {
      return res.status(400).json({ message: 'Required fields: bloodType, condition, hospital' });
    }

    const record = await Record.create({
      user: req.user._id,
      bloodType,
      condition,
      hospital,
      notes
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find({ user: req.user._id });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Record removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};