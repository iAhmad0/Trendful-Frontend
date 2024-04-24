import Sidebar from '../Sidebar'
import Review from '../Component/Review'

function ReviewPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Review />
      </div>
    </div>
  )
}
export default ReviewPage
