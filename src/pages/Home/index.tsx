import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <button onClick={() => router.push('/')}>Go to Start Page</button>
      <h1>This is Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Nulla repudiandae impedit iure 
        doloribus ratione dolores velit laudantium vero autem 
        quibusdam consequatur incidunt, consequuntur corrupti 
        vel soluta at facilis cumque magni!
        </p>
      <h4>This is a home page</h4>
    </div>
  )
}
export default Home