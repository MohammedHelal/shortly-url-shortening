import { useState } from "react";
import PropTypes from "prop-types";

function ShortenForm({ sendUrl }) {
  const [urlTyped, setUrlTyped] = useState("");
  const [isError, setIsError] = useState("");
  const urlRegex =
    /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;

  function urlchangeHandler(event) {
    setIsError("");
    setUrlTyped(event.target.value);
  }

  function submitHandler() {
    if (urlTyped === "") {
      setIsError("Please add a link!");
      return;
    }

    if (!urlRegex.test(urlTyped)) {
      setIsError("Please enter a valid url!");
      return;
    }
    sendUrl(urlTyped);
    return;
  }

  let inputClasses = isError === "" ? "url-input" : "url-input error-input";

  return (
    <div className="short-form">
      <div>
        <input
          className={inputClasses}
          type="text"
          value={urlTyped}
          placeholder="Shorten a link here..."
          onChange={urlchangeHandler}
        />
        {isError !== "" && <p className="error">{isError}</p>}
      </div>
      <button className="submit-button" type="submit" onClick={submitHandler}>
        Shorten It!
      </button>
    </div>
  );
}

ShortenForm.propTypes = {
  sendUrl: PropTypes.func,
};

export default ShortenForm;
