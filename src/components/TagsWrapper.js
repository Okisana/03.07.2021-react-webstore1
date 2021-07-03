import TagsInput from "./TagsInput";
import { useState } from "react";
function TagsWrapper() {
  const [inputValue, setInputValue] = useState("");

  const updateTag = (value) => {
    const tagComa = value.replace(/ /g, ", ");
    setInputValue(tagComa);
  };
  return (
    <div>
      <div className="container">
        <h1>
          Looking for tags:
          {inputValue}
        </h1>
        <TagsInput inputText={inputValue} updateCallback={updateTag} />
      </div>
    </div>
  );
}
export default TagsWrapper;
