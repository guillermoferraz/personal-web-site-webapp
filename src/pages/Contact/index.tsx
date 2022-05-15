import { NextPage } from "next"
import { useRouter } from "next/router"
const Contact: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>Back</button>
      <h1>Page Contact</h1>
    </div>
  )
}
export default Contact