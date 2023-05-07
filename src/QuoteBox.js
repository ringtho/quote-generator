import { useEffect, useState } from "react"

const QuoteBox = () => {

    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState()

    let colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

    useEffect(function (){
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setQuotes(data.quotes))
    }, [])

    const getRandomNumber = () => {
        return Math.floor(Math.random() * quotes.length)
    }

    const getQuote = () => {
        setQuote(quotes[getRandomNumber()])
    }

    const displayQuote = !quote ? quotes[getRandomNumber()] : quote

    return (
        <div className="wrapper">
            <div id="quote-box">
                <p id="text">
                    <i className="fa fa-quote-left"></i> {displayQuote?.quote}
                </p>
                <p id="author">
                    - {displayQuote?.author}
                </p>
                <div className="buttons">
                    <a className="button" href="https://twitter.com/2" id="tweet-quote">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="button" id="tumblr-quote" href="https://www.tumblr.com/login?redirect_%3Dtumblr_share_button">
                        <i className="fa-brands fa-tumblr"></i>
                    </a>
                    <button id="new-quote" className="button" onClick={() => getQuote()}>New Quote</button>
                </div>

            </div>
            <div className="footer">
                <p>by sringtho</p>
            </div>
        </div>
    )
}

export default QuoteBox