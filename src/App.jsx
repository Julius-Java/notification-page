import { useState } from 'react'
import angelaImg from "./assets/images/avatar-angela-gray.png"

function App() {

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
        <div className='notificationBox'>
          <img className='avatar' src={angelaImg} />

          <div className='notification'>
            <div>
              <p className='notification--text'> <span className='notification--trigger'>Mark Webber</span> reacted to you recent post <span className='notificationHighlight'>My first tournament today! </span> <span className='notification--dot'></span>
              </p>
            </div>

            <p className='notification--time'>1m ago</p>
          </div>
        </div>

        <div className='notificationBox'>
          <img className='avatar' src={angelaImg} />

          <div className='notification'>
            <div>
              <p className='notification--text'> <span className='notification--trigger'>Mark Webber</span> reacted to you recent post <span className='notificationHighlight'>My first tournament today! </span> <span className='notification--dot'></span>
              </p>
            </div>

            <p className='notification--time'>1m ago</p>
          </div>
        </div>

                <div className='notificationBox'>
          <img className='avatar' src={angelaImg} />

          <div className='notification'>
            <div>
              <p className='notification--text'> <span className='notification--trigger'>Mark Webber</span> reacted to you recent post <span className='notificationHighlight'>My first tournament today! </span> <span className='notification--dot'></span>
              </p>
            </div>

            <p className='notification--time'>1m ago</p>
          </div>
        </div>

        
      </section>

    </main>
  )
}

export default App
