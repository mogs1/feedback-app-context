import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import Data from "../data/FeedbackData";

export const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([ 
        {
            id: 1,
            text: 'this is feedback item 1',
            rating: 10,
       }, 
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 5,
       }, 
        {
            id: 3,
            text: 'this is feedback item 3',
            rating: 8,
       }, 
    ])

 const [feedbackEdit, setFeedbackEdit] = useState({
    items: {},
    edit: false
 })

 const deleteFeedback = (id) => {
            if (window.confirm('Are  you sure you want to delete this item')) {
                setFeedback(feedback.filter((item) => item.id !== id))
            }
        }
   
    const   updateFeedback = (id, updItem) => setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackProvider