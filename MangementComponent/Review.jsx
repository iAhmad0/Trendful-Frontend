import { useState } from 'react'
const Reviews = [
  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
  },
  {
    account: 'MohamedAhmed60@gmail.com',
    name: 'Mohamed Ahmed',
  },
  {
    account: 'AhmedHussein90@gmail.com',
    name: 'Ahmed Hussein',
  },
  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
  },
  {
    account: 'AhmedAsherf72@gmail.com',
    name: 'Ahmed Asherf',
  },
]
function Review() {
  const [currentPage, setCurrentPage] = useState('PageOne')
  const handleClick = () => {
    setCurrentPage(currentPage === 'PageOne' ? 'PageTwo' : 'PageOne')
  }
  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">Reviews</h3>
      </div>
      {currentPage === 'PageOne' && (
        <div className="flex my-[15px] justify-between flex-wrap">
          {Reviews.map((object) => {
            return (
              <div className="font-light w-[49%]  mb-[10px] p-[10px] text-[black] rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31]">
                <p>
                  Name : <span className="ml-[5px]">{object.name}</span>
                </p>
                <p>
                  Email : <span className="ml-[5px]">{object.account}</span>
                </p>
                <div className=" float-end text-[#3E64DA]">
                  <button
                    className=" w-[70px] rounded-[10px] mb-[10px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]"
                    onClick={handleClick}
                  >
                    Review
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {currentPage === 'PageTwo' && (
        <div>
          <div className="font-light my-[20px] text-[black] p-[20px] mb-[20px] border-[1px] border-solid rounded-[10px] border-[#3E64DA] hover:border-[#F39E31]">
            <p>
              Name : <span className="ml-[5px]">Mohamed Tamer</span>
            </p>
            <p>
              Email : <span className="ml-[5px]">MohamedTamer75@gmail.com</span>
            </p>
            <p className="my-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto tempore tenetur reiciendis enim fuga rem vitae saepe
              blanditiis? Quo reiciendis necessitatibus aperiam amet at possimus
              nostrum, explicabo quibusdam quia laboriosam? .
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque excepturi, beatae voluptates alias delectus iure cumque
              quos minus veritatis magni quia et. Impedit quas, sit labore
              excepturi provident nulla ad?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              illo asperiores perspiciatis nesciunt sequi beatae, accusamus
              omnis itaque tempora eius vero sunt deleniti dicta sit qui, eos
              atque, alias odit?
            </p>
          </div>
          <button
            className="text-[#3E64DA] w-[70px] rounded-[10px] mb-[10px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]"
            onClick={handleClick}
          >
            Return
          </button>
        </div>
      )}
    </main>
  )
}
export default Review
