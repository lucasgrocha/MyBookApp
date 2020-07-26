import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import TextInput from "../TextInput";
import TagsServices from "../../services/TagsService";
import firebase from "../../firebase";

interface Tag {
  id: string;
  name: string;
  color: string;
}

interface Props {
  ids?: string[];
  hasInput?: boolean;
  data?: {}[];
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<Tag[]>();

  const addTag = (userInput: string, color: string) => {
    const notesRef = firebase.database().ref("tags");
    notesRef.push({ name: userInput, color: color });
  };

  useEffect(() => {
    if (!!props.data) {
      const castedData = props.data as Tag[];
      const filteredByKey = castedData.filter((tag) =>
        props.ids?.includes(tag.id)
      );
      setTags(!props.ids ? castedData : filteredByKey);
    }
  }, [props.ids, props.data]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags?.map((tag) => (
        <Tag color={tag.color} id={tag.id} name={tag.name} key={tag.id} />
      ))}
      {props.hasInput && <TextInput submitAction={addTag} />}
    </div>
  );
};

export default Tags;
