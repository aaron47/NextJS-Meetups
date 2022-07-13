import Image from 'next/image';
import { Meetup } from '@prisma/client';
import styles from '../../styles/MeetupStyles/MeetupDetail.module.css';

interface Props {
  meetup: Meetup;
}

const MeetupDetail: React.FC<Props> = ({ meetup }) => {
  return (
    <section className={styles.detail}>
      <Image
        src={meetup.image}
        height={50}
        width={77}
        layout="responsive"
        alt="logo"
      />

      <h1>{meetup.title}</h1>
      <p>{meetup.description}</p>
    </section>
  );
};

export default MeetupDetail;
