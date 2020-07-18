import api from "./api";

const NotesService = {
  create: (params: object) => api.post("/notes", params),
  update: (params: object, noteId: number) =>
    api.put(`/notes/${noteId}`, params),
};

export default NotesService;
