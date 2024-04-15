import Header from '../Component/Header'
import Payment from '../Component/Payment'
import { useParams } from 'react-router-dom'
function PaymentPage() {
  let { data } = useParams()
  return (
    <>
      <Header />
      <Payment props={data} />
    </>
  )
}
export default PaymentPage
