import { Profile } from "./Profile/Profile"
import { Layout } from "./Layout"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"

import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

    </Layout>
  )
}
