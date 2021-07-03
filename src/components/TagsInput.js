import { useState } from "react";
function TagsInput({ updateCallback }) {
  const [text, setText] = useState("");

  const updateText = (event) => {
    setText(event.target.value);
    updateCallback(event.target.value);
  };

  const tagsCloud = [
    "Meeeeouw",
    "cough",
    "furball",
    "into",
    "food",
    "bowl",
    "then",
    "scratch",
    "owner",
    "for",
    "a",
    "new",
    "one",
    "experiences",
    "short",
    "bursts",
    "of",
    "poo-phoria",
    "after",
    "going",
    "to",
    "the",
    "loo",
    "scratch",
    "my",
    "tummy",
    "actually",
    "i",
    "hate",
    "you",
    "now",
    "fight",
    "me",
    "so",
    "freak",
    "human",
    "out",
    "make",
    "funny",
    "noise",
    "mow",
    "mow",
    "mow",
    "mow",
    "mow",
    "mow",
    "success",
    "now",
    "attack",
    "human",
    "yet",
    "drink",
    "from",
    "the",
    "toilet",
    "but",
    "sitting",
    "in",
    "a",
    "box.",
    "Show",
    "belly.",
    "Spit",
    "up",
    "on",
    "light",
    "gray",
    "carpet",
    "instead",
    "of",
    "adjacent",
    "linoleum",
    "good",
    "now",
    "the",
    "other",
    "hand,",
    "too",
    "check",
    "cat",
    "door",
    "for",
    "ambush",
    "10",
    "times",
    "before",
    "coming",
    "in",
  ];
  //if put here the variable, why all bagdes till matched one will chane color but not chosen one?
  //  let badgeColor = "badge bg-primary";

  const list = tagsCloud.map((tagElement) => {
    // chosen word color change:
    let badgeColor = "badge bg-primary";
    // if (tagElement === text) {
    //   badgeColor = "badge bg-warning";
    // }

    //multiple words color change:
    const inputList = text.split(" ");
    if (inputList.indexOf(tagElement) !== -1) {
      badgeColor = "badge bg-warning";
    }
    return (
      <div style={{ display: "inline", marginTop: "8px" }}>
        <span className={badgeColor} style={{ margin: "5px" }}>
          {tagElement}
        </span>
      </div>
    );
  });

  return (
    <div>
      <div className="row my-2">
        <div className="col ">
          <input
            className="form-control input-lg"
            onChange={updateText}
            value={text}
          />
        </div>
      </div>

      <div>{list}</div>
    </div>
  );
}
export default TagsInput;
