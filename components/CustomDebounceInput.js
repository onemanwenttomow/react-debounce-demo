import { useState, useEffect } from "react";

export default function CustomDebounceInput({ IMAGES_PER_REQUEST }) {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!search) {
      return;
    }
    let timerId = setTimeout(() => {
      console.log("MAKING API REQUEST");
      setCount((oldCount) => oldCount + 1);
    }, 500);

    return () => clearTimeout(timerId);
  }, [search]);

  return (
    <section>
      <h1>using custom debounce</h1>
      <h2>Next Images Displayed: {count * IMAGES_PER_REQUEST}</h2>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
    </section>
  );
}
