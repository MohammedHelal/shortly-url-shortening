import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ShortenCards({ urlVal, index, deleteURL }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(false);

    fetch(`https://api.shrtco.de/v2/shorten?url=${urlVal}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error:" + err));
  }, [urlVal]);

  function deleteCard() {
    deleteURL(index);
  }

  function copyCard() {
    if (!copied) {
      navigator.clipboard.writeText(urlVal);
      setCopied(true);
    } else setCopied(false);
  }

  let copyClasses = copied ? "copied-button" : "copy-button";
  return (
    <div className="shorten-cards">
      <p>{urlVal}</p>
      <div>
        <a>{}</a>
        <button className={copyClasses} onClick={copyCard}>
          {!copied ? "Copy" : "Copied!"}
        </button>
        <button className="close-button" onClick={deleteCard}>
          X
        </button>
      </div>
    </div>
  );
}

ShortenCards.propTypes = {
  urlVal: PropTypes.string,
  index: PropTypes.number,
  deleteURL: PropTypes.func,
};
export default ShortenCards;
