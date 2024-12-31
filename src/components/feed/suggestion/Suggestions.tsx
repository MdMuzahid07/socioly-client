import SuggestPages from "./SuggestPages";
import YouMayLikeToConnect from "./YouMayLikeToConnect";

export default function Suggestions() {
  return (
    <aside className="max-h-[80vh] md:col-span-3  drop-shadow-sm sticky top-20 space-y-6">
      <YouMayLikeToConnect />
      <SuggestPages />
    </aside>
  )
};
