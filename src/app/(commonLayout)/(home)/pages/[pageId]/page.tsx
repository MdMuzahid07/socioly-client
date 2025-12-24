import { use } from "react";
import CommunityPageDetails from "../../../../../view/pages/CommunityPageDetails";

const page = ({ params }: { params: Promise<{ pageId: string }> }) => {
  const { pageId } = use(params);

  return <CommunityPageDetails pageId={pageId} />;
};

export default page;
