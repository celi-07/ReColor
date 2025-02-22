import { useLocation } from "react-router-dom"

function Profile({ width }) {
    const location = useLocation()
    const { name, age } = location.state || {}
        
    return (
        <div>
        <h1>Profile Page</h1>
        {name ? (
            <p>Name: {name}, Age: {age}</p>
        ) : (
            <p>No data received from Home</p>
        )}
        </div>
    )
}

export default Profile
