import { useContext } from "react";

import { MessageContainer, MessageComponent } from "./styles";
import { MessageContext } from "../Blogmanagement/BlogManagement";

function Message() {
  const message = useContext(MessageContext);

  return (
    <MessageComponent>
      <MessageContainer>{message}</MessageContainer>
    </MessageComponent>
  );
}

export default Message;
