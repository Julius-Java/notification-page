import React from "react"
import { useState } from "react"


export default function NotificationBox(props) {

    const {avatar, trigger, message, postHighlight, groupHighlight, pictureHighlight: {highlightAvatar}, privateMsg, time} = props.items

    const {id, setMsgStatus, readStatus} = props

    return (
        <div
        onClick={() => setMsgStatus(id)}
        style={{backgroundColor : !readStatus && "hsl(210, 60%, 98%)"}}
        className='notificationBox'>
            <img className='avatar' src={avatar} alt="avatar" />


            <div className={'notification ' + (highlightAvatar && "pictureHighlight")}>
                <div>
                    <p className='notification--text'>
                        <a href="#" className='notification--trigger'>{trigger} </a>
                        {message}
                        {postHighlight && <a className='notificationHighlight'> {postHighlight} </a>}
                        {groupHighlight && <a href='#' className='groupHighlight'> {groupHighlight} </a>}
                        {!readStatus && <span className='notification--dot'></span>}
                    </p>

                    <p className='notification--time'>{time}</p>
                </div>

                {highlightAvatar && <img className='picture' src={highlightAvatar} alt="avatar" />}

                {privateMsg &&
                    <div className='privateMsg'>
                        <p>{privateMsg}</p>
                    </div>
                }
            </div>
        </div>
    )
}