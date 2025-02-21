import React from 'react'

const InteractiveButton = ({
    handlePress = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    disableHover = false,
    disabled = false,
    className = '',
    textStyle = '',
    text = 'BUTTON',
}) => {
    return (
        <button 
            className=
                {`
                    font-maurenTrial p-2 rounded-tl-2xl rounded-br-2xl outline outline-2 outline-turqoise text-white bg-turqoise transition duration-300 
                    ${className} 
                    ${disableHover ? 'no-hover' : 'hover:text-turqoise hover:bg-white'}
                `}
            onClick={handlePress}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
        >
            <p className={`${textStyle}`}>{text}</p>
        </button>
    )
}

export default InteractiveButton