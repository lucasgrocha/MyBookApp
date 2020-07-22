import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Tag from "./Tag";
import TextInput from "../TextInput";
import TagsServices from '../../services/TagsService'

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

  useEffect(() => {
    api.get("/tags.json", {
        params: {
          id: props.ids,
        },
      }).then((response) => {
        setTags(Object.values(response.data));
      });
  }, [props.ids]);

  if (!tags) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags?.map((tag) => (
        <Tag color={tag.color} id={tag.id} name={tag.name} key={tag.id} />
      ))}
      {props.hasInput && <TextInput submitAction={TagsServices.create} />}
    </div>
  );
};

export default Tags;
