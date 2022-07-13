import { Meetup } from '@prisma/client';
import styles from '../../styles/MeetupStyles/MeetupItem.module.css';
import Card from '../ui/Card';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  meetup: Meetup;
}

const MeetupItem: React.FC<Props> = ({ meetup }) => {
  const router = useRouter();

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image
            src={meetup.image}
            height={200}
            width={77}
            layout="responsive"
            alt="Meetup Image"
          />
        </div>
        <div className={styles.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={() => router.push(`/${meetup.id}`)}>
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
