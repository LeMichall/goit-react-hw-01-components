import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friendlist } from './Friendlist/Friendlist';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friendlist/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload Stats" />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
