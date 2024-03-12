import React from 'react'
import { useContext } from 'react'
import Card from './shared/Card'
import {FaEdit, FaTimes} from 'react-icons/fa'
import { FeedbackContext } from '../contexts/feedbackContext'

function FeedbackItems({item }) {
    // const [rating, setRating] = (items.rating)
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>

        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='red'/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple'/>
        </button>

        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItems