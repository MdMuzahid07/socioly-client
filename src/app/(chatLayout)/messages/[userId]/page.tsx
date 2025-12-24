import { use } from "react";
import ChatPageView from "../../../../view/chatting/chat-layout/ChatPageView";

const page = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return <ChatPageView userId={userId} />;
};

export default page;
