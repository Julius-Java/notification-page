const ClearModal = ({gif, showModal, handleClick}) => {

    return (
        <div style={{visibility: showModal ? "visible" : "hidden"}} onClick={handleClick} className="overlay">
            <div className="clearModal">
                <img src={gif} className="gif" />
                <p>You're all caught up!</p>
            </div>
        </div>
    )
}

export default ClearModal;