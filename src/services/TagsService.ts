import api from './api'

const TagsService = {
  create: (name: string, color: string) => api.post('/tags', {
    name, color
  })
}

export default TagsService