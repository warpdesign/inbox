import React from "react";
import { MessageList } from "../organisms/message-list/messageList";

function Inbox() {
  return (
    <div data-testid="inbox">
      <MessageList></MessageList>
    </div>
  );
}

export { Inbox };
