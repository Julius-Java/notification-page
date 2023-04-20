

export default function NotificationBox(props) {
    const {avatar, trigger, message, postHighlight, groupHighlight, pictureHighlight: {highlightAvatar}, privateMsg, time} = props.items

    return (
        <div className='notificationBox'>
            <img className='avatar' src={"src/assets/images/" + avatar} />

            <div className={'notification ' + (highlightAvatar && "pictureHighlight")}>
                <div>
                    <p className='notification--text'>
                        <a href="#" className='notification--trigger'>{trigger} </a>
                        {message}
                        {postHighlight && <span className='notificationHighlight'> {postHighlight} </span>}
                        {groupHighlight && <a href='#' className='groupHighlight'> {groupHighlight} </a>}
                        <span className='notification--dot'></span>
                    </p>

                    <p className='notification--time'>{time}</p>
                </div>

                {highlightAvatar && <img className='picture' src={'src/assets/images/' + highlightAvatar} />}

                {privateMsg &&
                    <div className='privateMsg'>
                        <p>{privateMsg}</p>
                    </div>
                }
            </div>
        </div>
    )
}