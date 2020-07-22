import React from "react";
import { TagButton } from "./styles";

interface Props {
  clicked: (arg1: number) => void;
  selectedTags: number[];
  tags: {
    id: number;
    name: string;
    color: string;
  }[];
}

const TagsSelector: React.FC<Props> = (props) => {

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "20px 0",
        justifyContent: "center",
      }}
    >
      {props.tags.map((tag) => (
        <TagButton
          key={tag.id}
          color={props.selectedTags?.includes(tag.id) ? "black" : tag.color}
          onClick={() => props.clicked(tag.id)}
        >
          {tag.name}
        </TagButton>
      ))}
    </div>
  );
};

export default TagsSelector;
