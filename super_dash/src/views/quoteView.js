import '../css/quote.css';


function QuoteView (props) {
    
    return (
        <div className="quote">
            <h1>"{props.quote}"</h1> 
            <h3>– {props.character}</h3>   
        </div>
    )
  }
  
export default QuoteView;