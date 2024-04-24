import React, { useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
const data = [
  {
    id: 0,
    img: '../../public/Image/avatar.jpg',
    userName: 'tamer',
    email: 'dummy_text@gmail.com',
  },
  {
    id: 1,
    img: '../../public/Image/avatar.jpg',
    userName: 'ahmed',
    email: 'dummy_text@gmail.com',
  },
  {
    id: 2,
    img: '../../public/Image/avatar.jpg',
    userName: 'walid',
    email: 'dummy_text@gmail.com',
  },
]
const ChatSideBar = () => {
  const [isChatClicked, setIsClicked] = useState(false)
  return {
    render: (
      <ul className="bg-[#3E64DA] px-[10px] py-[30px]  w-[350px] ">
        <IoMdArrowRoundBack className=" cursor-pointer mb-[10px] text-[white] text-2xl" />
        {data.map((user) => {
          return (
            <li
              className="flex mb-[25px]  hover:bg-[#F39E31] cursor-pointer p-[5px] text-[white] chats"
              key={user.id}
              onClick={function (e) {
                setIsClicked(true)
                const chats = document.querySelectorAll('.chats')
                chats.forEach((chat) => {
                  chat.classList.remove('bg-[#F39E31]')
                  e.currentTarget.classList.add('bg-[#F39E31]')
                })
              }}
            >
              <img
                src={user.img}
                alt=""
                className="w-[60px] h-[60px] rounded-full mr-[10px]"
              />
              <div className="container">
                <p className="mb-[7px]">{user.userName}</p>
                <p>{user.email}</p>
              </div>
            </li>
          )
        })}
      </ul>
    ),
    isChatClicked,
  }
}
export default ChatSideBar
