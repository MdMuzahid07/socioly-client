import SuggestPages from "./SuggestPages";
import YouMayLikeToConnect from "./YouMayLikeToConnect";

export default function Suggestions() {
  return (
    <aside className="sticky top-20 max-h-[80vh] space-y-6 drop-shadow-sm md:col-span-3">
      <YouMayLikeToConnect />
      <SuggestPages />
    </aside>
  );
}
