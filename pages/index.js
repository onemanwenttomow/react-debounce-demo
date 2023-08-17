import CustomDebounceInput from "@/components/CustomDebounceInput";
import NoDebounceInput from "@/components/NoDebounceInput";
import ReactDebounceInput from "@/components/ReactDebounceInput";

const IMAGES_PER_REQUEST = 5;

export default function Home() {
  return (
    <main>
      <NoDebounceInput IMAGES_PER_REQUEST={IMAGES_PER_REQUEST} />
      <CustomDebounceInput IMAGES_PER_REQUEST={IMAGES_PER_REQUEST} />
      <ReactDebounceInput IMAGES_PER_REQUEST={IMAGES_PER_REQUEST} />
    </main>
  );
}
