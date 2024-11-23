import './Button.css'

const FullButton = ( { displayMessage, onClick, disabled=false } ) => {
    return (
        <button
            className={`full-button ${disabled ? 'disabled': ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {displayMessage}
        </button>
    )
}

export default FullButton;