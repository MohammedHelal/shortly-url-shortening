import { useState } from "react";
import ShortenForm from "./form/ShortenForm";
import ShortenCards from "./card/ShortenCards";
import "./Shorten.css";

function Shorten() {
  const [urlArray, setUrlArray] = useState([]);

  function geturl(url) {
    setUrlArray((prevState) => [...prevState, url]);
  }

  function deleteURL(index) {
    setUrlArray((prevState) => prevState.filter((ele, i) => i !== index));
  }

  return (
    <section className="shorten">
      <ShortenForm sendUrl={geturl} />
      {urlArray.length > 0 &&
        urlArray.map((ele, i) => (
          <ShortenCards key={i} index={i} urlVal={ele} deleteURL={deleteURL} />
        ))}
    </section>
  );
}

export default Shorten;
