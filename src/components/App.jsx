import { Profile } from "./Profile/Profile"
import user from '../user.json'

export const App = () => {
  return (
    <div>
      <Profile items={user} />
    </div>
  )
}
