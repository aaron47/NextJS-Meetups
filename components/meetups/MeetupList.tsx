import { Meetup } from '@prisma/client';
import MeetupItem from './MeetupItem';
import styles from '../../styles/MeetupStyles/MeetupList.module.css';

interface Props {
  meetups: Meetup[];
}

const MeetupList: React.FC<Props> = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
