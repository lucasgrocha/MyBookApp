import api from './api'

const NotesService = {
  create: (params: object) => {
    api.post('/notes', params)
  }
}

export default NotesService