import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../notesControllers/notesController";



const notes_router = Router();

notes_router.post('/create', createNote);
notes_router.get('/', getAllNotes);
notes_router.get('/:id', getNoteById);
notes_router.put('/:id', updateNote);
notes_router.delete('/:id', deleteNote);


export default notes_router;
