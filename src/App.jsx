import { useState } from "react";
import "./App.css";
import dbQuotes from "./db/quote.json";
import { getRandom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";

const bgImages = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setbgImage] = useState(getRandom (bgImages))

  const handleChangeQuote = () => {
    setQuote (getRandom(dbQuotes)) 
    setbgImage(getRandom(bgImages))
  }
  return (
    <main className={`app ${bgImage}`}>
      <section className="app__container">
        <h1 className="title"> Abriendo los Cielos </h1>

        <QuoteBox handleChangeQuote= {handleChangeQuote} phrase={quote.phrase} />

        <footer>
          <h3 className ="author"> {quote.author} </h3>
          <div>
            <h4 className="copy__right"> Creado por Daniel Garcia <a className="facebook" href="https://www.facebook.com/instruirfusagasuga/" > Vistanos en Facebook</a> </h4>
            <a href="https://www.facebook.com/instruirfusagasuga/">Facebook</a>
          </div>
          
        </footer>
      </section>

    </main>
  );
}


export default App;
