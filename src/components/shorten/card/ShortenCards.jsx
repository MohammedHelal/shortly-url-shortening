import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ShortenCards({ url, index, deleteURL }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setCopied(false);
    const urlApi = "https://api.shrtco.de/v2/shorten";
    const options = {
      method: "POST",
      body: JSON.stringify({
        url: "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",
      }),
    };

    fetch(urlApi, options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("error:" + err));
  }, [url]);

  function deleteCard() {
    deleteURL(index);
  }

  function copyCard() {
    if (!copied) {
      navigator.clipboard.writeText(url);
      setCopied(true);
    } else setCopied(false);
  }

  let copyClasses = copied ? "copied-button" : "copy-button";
  return (
    <div className="shorten-cards">
      <p>{url}</p>
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
  url: PropTypes.string,
  index: PropTypes.number,
  deleteURL: PropTypes.func,
};
export default ShortenCards;
