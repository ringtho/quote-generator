import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "./redux/colorReducer"


function App() {
  const dispatch = useDispatch()
  const color = useSelector(state => state.colorReducer.color)
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState()

  const colors = [
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
    const id1 = '5a022b72e96c4c9585c32bf6a75f62d9'
    const id2 = 'e3c6895ce42069f0ee7e991229064f167fe8ccdc'
    const url = `https://gist.githubusercontent.com/camperbot/${id1}/raw/${id2}/quotes.json`
    fetch(url)
    .then(res => res.json())
    .then(data => setQuotes(data.quotes))
}, [])

const getRandomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

const getQuote = () => {
    setQuote(quotes[getRandomNumber(quotes)])
}

const getColor = () => {
    return colors[getRandomNumber(colors)]
}

const handleBtnClick = () => {
    getQuote()
    dispatch(changeColor(getColor()))
}

const displayQuote = !quote ? quotes[getRandomNumber(quotes)] : quote
const colorTheme = !color ? getColor() : color

const styles = {
    color: colorTheme
}

const backgroundStyles = {
    backgroundColor: colorTheme
}

  return (
    <div className="app"  style={backgroundStyles}>
      <div className="wrapper">
        <div id="quote-box">
            <p id="text"  style={styles}>
                <i className="fa fa-quote-left"></i> {displayQuote?.quote}
            </p>
            <p id="author" style={styles}>
                - {displayQuote?.author}
            </p>
            <div className="buttons">
                <a className="button" style={backgroundStyles} 
                href="https://twitter.com/2" id="tweet-quote">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="button" id="tumblr-quote" 
                style={backgroundStyles}  
                href="https://www.tumblr.com/login?redirect_%3Dtumblr_share_button">
                    <i className="fa-brands fa-tumblr"></i>
                </a>
                <button 
                    id="new-quote" 
                    style={backgroundStyles} 
                    className="button" 
                    onClick={handleBtnClick}
                >New Quote</button>
            </div>

        </div>
        <div className="footer">
            <p>by sringtho</p>
        </div>
      </div>
    </div>
  );
}

export default App;
