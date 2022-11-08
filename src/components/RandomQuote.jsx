import React from "react"

class RandomQuote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            colors: ["#61764B", "#CFB997", "#9BA17B", "#61764B", "#D8D8D8", "#647E68", "#562B08", "#73A857", "#77B1A9", "#BDBB99"],
            quotes: [`The person who says it cannot  be done should not interrupt the person who is doing it.`,
                     `The only way to do great work is to love what you do.`,
                     `When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.`,
                     `It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.`,
                     `An unexamined life is not worth living.`,
                     'Believe you can and you’re halfway there.',
                     "Our lives begin to end the day we become silent about things that matter.",
                     "Eighty percent of success is showing up.",
                     "Dream big and dare to fail.",


            ],  
            author: ["Confucius",
                     "Steve Jobs",
                     "Henry Ford",
                     "Ann Landers",
                     "Socrates",
                     "Theodore Roosevelt",
                     "Martin Luther King Jr.",
                     "Woody Allen",
                     "Norman Vaughan"
        
            ],
            selectedColor: "",
            selectedQuote: "",
            selectedAuthor: ""
        }
        this.changeColor = this.changeColor.bind(this);
        
    }
    changeColor(){
        let randomNumbers = Math.floor(Math.random() * this.state.quotes.length)

        setTimeout(() => this.setState({
            selectedColor: this.state.colors[randomNumbers],
            selectedQuote: this.state.quotes[randomNumbers],
            selectedAuthor: this.state.author[randomNumbers]
        }),800)

        setTimeout(() => this.setState({
            selectedQuote: "",
            selectedAuthor: ""
        }))
    }
    render(){
        return(      
        <div style={{
            backgroundColor: this.state.selectedColor
        }} className="wrapper" id="wrapper">
            <div className="quote-box" id="quote-box">
                <i style={{
                    color: this.state.selectedColor,
                }} className="bi bi-quote"></i> 
                <span style={{
                    color: this.state.selectedColor,
                    opacity: this.state.selectedQuote === "" ? "0" : "1" 
                }} className="text quote-text" id="text">{this.state.selectedQuote}</span>
                <div style={{
                    color: this.state.selectedColor,
                    opacity: this.state.selectedAuthor === "" ? "0" : "1"  
                }} className="author quote-author" id="author">
                - {this.state.selectedAuthor}
                </div>
                <div className="buttons">
                    <a className="twitter-button" style={{
                        backgroundColor: this.state.selectedColor  
                    }} target="_blank" title="Tweet this quote on twitter!" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Definiteness%20of%20purpose%20is%20the%20starting%20point%20of%20all%20achievement.%22%20W.%20Clement%20Stone"><i className="bi bi-twitter"></i> </a>
                    <a className="tumblr-button" style={{
                        backgroundColor: this.state.selectedColor  
                    }} target="_blank" title="Post this quote on tumblr!" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Oprah%20Winfrey&content=You%20become%20what%20you%20believe.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"><i className="fa fa-tumblr" aria-hidden="true"></i> </a>
                    <button style={{
                        backgroundColor: this.state.selectedColor,
                        borderColor: this.state.selectedColor
                    }} onClick={window.onload = this.changeColor} className="new-quote btn btn-primary" id="new-quote">New quote</button>
                </div>
            </div>
            <div className="footer" id="footer">Re-created by Kent Miciano</div>
        </div>
        )
    }
}

export default RandomQuote;