import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
    return (
            <section className="quoteBox">

                <button className ="quoteBox__btn" onClick={handleChangeQuote}> Llave de Hoy </button>

                <article className="quoteBox__phrase">
                    <p>{phrase}</p>

                </article>

            </section>
    )
}

export default QuoteBox
