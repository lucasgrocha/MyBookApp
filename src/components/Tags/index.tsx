import React, { useState, useEffect } from "react";
import api from "../../service/api";
import Tag from "./Tag";

interface Tag {
  id: number;
  name: string;
  color: string;
}

interface Props {
  ids?: number[];
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    api.get("/tags", {
        params: {
          id: props.ids,
        },
      }).then((response) => {
        setTags(response.data);
      });
  }, []);

  if (!tags) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags?.map((tag) => (
        <Tag color={tag.color} id={tag.id} name={tag.name} key={tag.id} />
      ))}
    </div>
  );
};

export default Tags;
