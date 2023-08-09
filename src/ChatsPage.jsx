import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "8420a39a-b0ad-43c4-9fbd-cac5144c7c98",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} style={{ background: "black" }} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100%", background: "black" }}
      />
    </div>
  );
};

export default ChatsPage;
