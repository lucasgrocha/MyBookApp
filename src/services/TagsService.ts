import api from "./api";

const TagsService = {
  create: (name: string, color: string) =>
    api.post("/tags", {
      name,
      color,
    }),
  index: () => api.get("/tags"),
};

export default TagsService;
