import { Profile } from "./Profile/Profile"
import { Layout } from "./Layout"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"

import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

export const App = () => {
  return (
    <Layout>
      <Profile items={user}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  )
}
