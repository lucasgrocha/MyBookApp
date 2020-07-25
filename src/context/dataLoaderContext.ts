import React from "react";

const dataLoaderContext = React.createContext({
  notes: [{}],
  tags: [{}],
  books: [{}],
});

export default dataLoaderContext;
