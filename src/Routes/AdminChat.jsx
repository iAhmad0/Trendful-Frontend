import React from 'react'
import ChatSideBar from '../Component/ChatSideBar'
import ChatWindow from '../Component/ChatWindow'

function AdminChat() {
  const { render, isChatClicked } = ChatSideBar()
  return (
    <main className="flex min-h-screen">
      {render}
      {isChatClicked ? (
        <ChatWindow />
      ) : (
        <div className="flex-1 px-[15px] py-[10px] h-screen border-box relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>logo</p>
            <p>dummy text</p>
          </div>
        </div>
      )}
    </main>
  )
}
export default AdminChat
