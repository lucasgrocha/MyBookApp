import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Tag from "./Tag";
import TextInput from "../TextInput";
import TagsServices from "../../services/TagsService";
import firebaseSerializer from "../../helper/firebaseSerializer";
import firebase from "../../firebase";

interface Tag {
  id: string;
  name: string;
  color: string;
}

interface Props {
  ids?: string[];
  hasInput?: boolean;
}

const Tags: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    const tagsRef = firebase.database().ref("tags");
    tagsRef.on("value", (snap) => {
      setTags(firebaseSerializer(snap.val()));
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
