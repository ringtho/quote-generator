

const QuoteBox = () => {
    return (
        <div className="wrapper">
            <div id="quote-box">
                <p id="text">
                    <i className="fa fa-quote-left"></i> I’ve missed more than 9000 shots in my career. 
                    I’ve lost almost 300 games. 26 times I’ve been 
                    trusted to take the game winning shot and missed. 
                    I’ve failed over and over and over again in my life. 
                    And that is why I succeed.
                </p>
                <p id="author">
                    - Michael Jordan
                </p>
                <div className="buttons">
                    <a className="button" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Every%20child%20is%20an%20artist.%20%20The%20problem%20is%20how%20to%20remain%20an%20artist%20once%20he%20grows%20up.%22%20Pablo%20Picasso" id="tweet-quote">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="button" id="tumblr-quote" href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DPablo%2BPicasso%26content%3DEvery%2Bchild%2Bis%2Ban%2Bartist.%2B%2BThe%2Bproblem%2Bis%2Bhow%2Bto%2Bremain%2Ban%2Bartist%2Bonce%2Bhe%2Bgrows%2Bup.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button">
                        <i className="fa-brands fa-tumblr"></i>
                    </a>
                    <button id="new-quote" className="button">New Quote</button>
                </div>

            </div>
            <div className="footer">
                <p>by sringtho</p>
            </div>
        </div>
    )
}

export default QuoteBox