import axios from 'axios'
import { PostMailerTypes } from '../store/types/mailerTypes'

const Mailer = {
  postMailer: async (data: PostMailerTypes) => {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + '/api/mailer/contact',
      data
    )
    return response.data
  },
}
export default Mailer
