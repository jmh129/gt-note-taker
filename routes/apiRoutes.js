// The following API routes should be created:
let notesDb = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
  // * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    res.json(notesDb);
  });

  // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  //   Had help with TA for this.
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    console.log(newNote);
    notesDb.push(newNote);
    fs.writeFile(
      "./db/db.json",
      JSON.stringify(notesDb),
      "utf8",
      (err) => {
        if (err) {
          throw err;
        } else {
          res.json(newNote);
        }
      }
    );
  });
};
// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
