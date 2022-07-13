import MainNavigation from './MainNavigation';
import styles from '../../styles/LayoutStyles/Layout.module.css';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
