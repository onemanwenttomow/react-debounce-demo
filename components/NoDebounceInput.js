import { useState } from "react";

export default function NoDebounceInput({ IMAGES_PER_REQUEST }) {
  const [count, setCount] = useState(0);

  function handleChange() {
    console.log("MAKING API REQUEST");
    setCount(count + 1);
  }
  return (
    <section>
      <h1>No Debounce</h1>
      <h2>Next Images Displayed: {count * IMAGES_PER_REQUEST}</h2>
      <label htmlFor="search">Search</label>
      <input id="search" onChange={handleChange} />
    </section>
  );
}
