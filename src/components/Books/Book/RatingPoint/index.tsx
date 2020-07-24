import React, { useState, useEffect } from "react";
import { Star } from "@styled-icons/evaicons-solid";
import styled from "styled-components";
import firebaseSerializer from "../../../../helper/firebaseSerializer";
import firebase from "../../../../firebase";

export const StyledStart = styled(Star)`
  width: 15px;
  fill: yellow;
`;

interface Props {
  bookId: number;
}

interface Rate {
  id: number;
  point: number;
  message: string;
  book_id: number;
}

const RatingPoint: React.FC<Props> = (props) => {
  const [rates, setRates] = useState<Rate>();
  useEffect(() => {
    const ratesRef = firebase.database().ref("rates");
    ratesRef
      .orderByChild("book_id")
      .equalTo(props.bookId)
      .on("value", (snap) => {
        const serialized = firebaseSerializer(
          snap.val().filter((data: any) => data !== null)
        );
        console.log(serialized);
        setRates(serialized[0]);
      });
  }, [props.bookId]);

  if (!rates) return null;

  let stars = [];

  for (let c = 0; c < rates.point; c++) {
    stars.push(<StyledStart key={c} />);
  }

  return <>{stars}</>;
};

export default RatingPoint;
