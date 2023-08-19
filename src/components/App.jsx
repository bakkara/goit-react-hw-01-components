import { Profile } from "./Profile/Profile"
import user from '../user.json'
import { Layout } from "./Layout"

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
    </Layout>
  )
}
