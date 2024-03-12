import { Link } from "react-router-dom"
import Card from "../components/shared/Card"
function AboutPages() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a react app to leave feedbaack for a product or service</p>
            <p>version: 1.0.0</p>

            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPages