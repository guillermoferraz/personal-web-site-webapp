import { NextPage } from "next"
import { useRouter } from "next/router"
const Blog: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>Back</button>
      <h1>Page Blog</h1>
    </div>
  )
}
export default Blog