import { useState } from 'react'
import NotificationBox from './components/NotificationBox'
import data from './data'
import ClearModal from './components/ClearModal'
import celebrationGif from "./assets/jumping.gif"

function App() {
  const [notificationData, setNotificationData] = useState(data)

  const [showModal, setShowModal] = useState(false)

  const numOfUnread = notificationData.filter((obj) => obj.msgStatus === false).length

  function clickAway() {
    setShowModal(prevValue => !prevValue)
  }

  function setMsgStatus(id) {
    setNotificationData((prevNotifications) => {
      return prevNotifications.map((notification, index) => {
        return index === id ? {...notification, msgStatus: true} : notification
      })
    })
  }

  function markAll() {
    setNotificationData((prevNotifications) => {
      return prevNotifications.map((notification) => {
        return {...notification, msgStatus: true}
      })
    })

    clickAway()
  }

  // Map over notification data and render
  const notifications = notificationData.map((items, index) => {
    return (
      <NotificationBox
        setMsgStatus={setMsgStatus}
        readStatus={items.msgStatus}
        key={index}
        id={index}
        items={items}
      />
    )
  })

  return (
    <main id='main'>

      <section className='top'>
        <div className='notificationBar'>
          <h1 className='heading'>Notifications</h1>
          {numOfUnread > 0 && (<div className='notificationCount'>{numOfUnread}</div>)}
        </div>

        <div className='markRead'>
          <p onClick={markAll} className='toggleRead'>Mark all as read</p>
        </div>
      </section>

      <section className='messages'>
        {notifications}
      </section>

      <ClearModal gif={celebrationGif} showModal={showModal} handleClick={clickAway} />
    </main>
  )
}

export default App
