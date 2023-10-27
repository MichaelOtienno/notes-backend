import { Request, Response } from "express";
import mssql from 'mssql'
import { notesSqlConfig } from "../config/notesConfig";

// create a note
export const createNote = async (req: Request, res: Response) => {
    try {

        const { note_title, note_body } = req.body;

        const pool = await mssql.connect(notesSqlConfig);
        const result = await pool.query(`INSERT INTO note (note_title, note_body)VALUES ('${note_title}', '${note_body}') `);

        return res.status(200).json({

            message: "note created successfully"
        })



    } catch (error) {
        return res.status(501).json({ error: error });
    }
}

// get all notes
export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(notesSqlConfig);
        const result = await pool.query('SELECT * FROM note');

        if (pool.connected) {
            console.log('Database connected');
        }

        return res.status(200).json(result.recordset);
    } catch (error) {
        return res.status(500).send("notes not found");
    }
};

//get a single note by id
export const getNoteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const pool = await mssql.connect(notesSqlConfig);
        const result = await pool.query(`SELECT * FROM note WHERE id = ${id}`);

        if (pool.connected) {
            console.log('Database connected');
        }

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        return res.status(200).json(result.recordset[0]);
    } catch (error) {
        return res.status(500).send("notes not found");
    }
};


//update a note by ID
export const updateNote = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { note_title, note_body } = req.body;

    try {
        const pool = await mssql.connect(notesSqlConfig);
        const result = await pool.query(`
            UPDATE note
            SET note_title = '${note_title}', note_body = '${note_body}'
            WHERE id = ${id}
        `);

        if (pool.connected) {
            console.log('Database connected');
        }

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        return res.status(200).json({ message: 'Note updated successfully' });
    } catch (error) {
        return res.status(500).send("notes not found");
    }
};


// delete a note by ID
export const deleteNote = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const pool = await mssql.connect(notesSqlConfig);
        const result = await pool.query(`DELETE FROM note WHERE id = ${id}`);


        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: 'Note not found' });
        }

        return res.status(204).json();
    } catch (error) {
        return res.status(500).send("note not deleted")
    }
};




