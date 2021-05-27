import React, { createContext, useState } from "react";

export const MessageContext = createContext();

export const ContextProvider = (props) => {
  const isMessageSent = false;

  const [state, updatedState] = useState(isMessageSent);

  return (
    <MessageContext.Provider value={[state, updatedState]}>
      {props.children}
    </MessageContext.Provider>
  );
};
