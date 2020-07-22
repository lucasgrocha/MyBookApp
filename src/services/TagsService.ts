import api from "./api";

const TagsService = {
  create: (name: string, color: string) =>
    api.post("/tags.json", {
      name,
      color,
    }),
  index: () => api.get("/tags.json"),
};

export default TagsService;
