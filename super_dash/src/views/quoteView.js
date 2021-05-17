import '../css/quote.css';


function QuoteView (props) {
    
    return (
        <div className="quote">
            <h1>"{props.quote}"</h1>   
        </div>
    )   // <h3>– {props.character}</h3>     Removed this since it needs some more work.
  }
  
export default QuoteView;