import { NextPage } from "next"
import { useRouter } from "next/router"
const Cv: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>Back</button>
      <h1>Page Cv</h1>
    </div>
  )
}
export default Cv