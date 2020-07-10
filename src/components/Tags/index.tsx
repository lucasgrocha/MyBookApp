import React, { useState, useEffect } from "react";
import api from "../../service/api";
import Tag from "./Tag";
import TextInput from "../TextInput";

interface Tag {
  id: number;
  name: string;
  color: string;
}

interface Props {
  ids?: number[];
  hasInput?: boolean;
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<Tag[]>();

  const postNewTag = () => {
    console.log('ok')
  }

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
      {props.hasInput && <TextInput submitAction={postNewTag} />}
    </div>
  );
};

export default Tags;
