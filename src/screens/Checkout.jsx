import React from 'react'

const Checkout = () => {
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div>
            <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default Checkout