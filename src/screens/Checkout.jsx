import React from 'react'

const Checkout = ({ width }) => {
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className='bg-lightPink'>
            <div className='font-maurenTrial text-turqoise text-[64px] text-center'>
                <button onClick={handleBack}>Back</button>
            </div>
        </div>
    )
}

export default Checkout