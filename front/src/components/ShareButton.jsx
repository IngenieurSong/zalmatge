import './ShareButton.css'

const ShareButton = ( { onClick } ) => {
    return (
        <button
            className="share-button"
            onClick={onClick}
        >
            공유하기
        </button>
    )
}

export default ShareButton;