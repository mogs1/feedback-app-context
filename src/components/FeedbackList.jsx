import { useContext } from "react";
import FeedbackItems from "./FeedbackItems";
import { FeedbackContext } from "../contexts/feedbackContext";

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    
    return (
        <div className="feedback-list">
            {feedback.map((items) => (
                <FeedbackItems
                 key={items.id}
                  item={items} 
                />
            ))}
        </div>
    )
}
                
 export default FeedbackList