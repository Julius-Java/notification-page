import { useState } from 'react'
import NotificationBox from './components/NotificationBox'
import data from './data'

function App() {

  const notifications = data.map((items, index) => {
    return (
      <NotificationBox key={index} items={items} />
    )
  })

  return (
    <main id='main'>

      <section className='top'>
        <div className='notificationBar'>
          <h1 className='heading'>Notifications</h1>
          <div className='notificationCount'>3</div>
        </div>

        <div className='markRead'>
          <p className='toggleRead'>Mark all as read</p>
        </div>
      </section>

      <section className='messages'>
        {notifications}
      </section>

    </main>
  )
}

export default App
