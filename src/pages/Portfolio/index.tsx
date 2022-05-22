import { NextPage } from "next"
import { useRouter } from "next/router"
const Portfolio: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>Back</button>
      <h1>Page Portfolio</h1>
    </div>
  )
}
export default Portfolio
