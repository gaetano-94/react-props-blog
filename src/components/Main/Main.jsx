// IMPORT
import CardPost from '../Cards/CardPost';
import CardPostDue from '../Cards/CardPostDue';
import CardPostTre from '../Cards/CardPostTre';
import CardPostQuattro from '../Cards/CardPostQuattro';
import mainStyle from './Main.module.css';

const Main = () => {
  return (
    <main className={mainStyle.main}>
      <CardPost />
      <CardPostDue />
      <CardPostTre />
      <CardPostQuattro />
    </main>
  );
};

export default Main;
