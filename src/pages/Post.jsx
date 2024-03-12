import { Navigate, useNavigate, Routes, Route } from "react-router-dom"
function Post() {
    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/about')
    }

    if (status === 404) {
        return <Navigate to='/notfound'/>
    }
  return (
    <>
        <h1>Post</h1>
        <button onclick = {onClick}>
            Click Me
        </button>

        <Routes>
            <Route path="/show" element={<h2>hello Fam whats cooking</h2>}/>
        </Routes>
    </>
  )
}

export default Post