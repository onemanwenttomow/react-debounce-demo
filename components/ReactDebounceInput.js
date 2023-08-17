import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

export default function ReactDebounceInput({ IMAGES_PER_REQUEST }) {
  const [count, setCount] = useState(0);

  function handleChange() {
    console.log("MAKING API REQUEST");
    setCount(count + 1);
  }
  return (
    <section>
      <h1>using react-debounce-input</h1>
      <h2>Next Images Displayed: {count * IMAGES_PER_REQUEST}</h2>
      <label htmlFor="search">Search</label>
      <DebounceInput
        id="search"
        minLength={2}
        debounceTimeout={500}
        onChange={handleChange}
      />
    </section>
  );
}
