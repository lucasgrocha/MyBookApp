import api from './api'
import * as crypto from "crypto";

const TagsService = {
  create: (text: string) => api.post('/tags', {
    name: text,
    color: `#${crypto.randomBytes(3).toString("hex")}`
  })
}

export default TagsService