import styles from '../../styles/LayoutStyles/MainNavigation.module.css';
import Link from 'next/link';

const MainNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
