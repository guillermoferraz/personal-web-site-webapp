import { NextPage } from "next"
import { useRouter } from "next/router"
const AboutMe: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.push('/')}>Back</button>
      <h1>About me page</h1>
    </div>
  )
}
export default AboutMe