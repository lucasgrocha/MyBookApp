import api from "./api";

const NotesService = {
  create: (params: object) => api.post("/notes.json", params),
  update: (params: object, noteId: number) => {
    console.log("note id: ", noteId)

    return api.put(`/notes/${noteId}.json`, params)
  }
};

export default NotesService;
