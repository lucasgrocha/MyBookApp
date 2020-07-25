import React from "react";

const dataLoaderContext = React.createContext({
  notes: [{}],
  tags: [{}],
  rates: [{}],
  books: [{}],
});

export default dataLoaderContext;
