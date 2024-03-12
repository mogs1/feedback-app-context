import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStata from "./components/FeedbackStata"
import FeedbackList from "./components/FeedbackList"
import AboutIconLink from "./components/AboutIconLink"
import AboutPages from "./pages/AboutPages"
import Post from "./pages/Post" 
import FeedbackProvider from "./contexts/feedbackContext"


function App() {

   return (
   <FeedbackProvider>
    <Router>
    <div className="container">
        <Routes>
            <Route exact path="/" element= 
            {
                <>
                 <FeedbackForm />

                 <FeedbackStata />
     
                 <FeedbackList/>
                </>
            }/>
           
            <Route path="/about" element={<AboutPages/>}/>

            <Route path="/post/*" element={<Post/>}/>
        </Routes>
            <AboutIconLink/>
        </div>
        </Router>
   </FeedbackProvider>
   )
}

export default App