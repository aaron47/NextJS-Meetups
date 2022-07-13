import { useRef } from 'react';
import { Meetup } from '@prisma/client';
import Card from '../ui/Card';
import styles from '../../styles/MeetupStyles/NewMeetupForm.module.css';

interface Props {
  onAddMeetup: (meetup: Meetup) => void;
}

const NewMeetupForm: React.FC<Props> = ({ onAddMeetup }) => {
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);
  const addressInputRef = useRef<HTMLInputElement | null>(null);

  const handleMeetupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleInputRef.current!.value;
    const image = imageInputRef.current!.value;
    const description = descriptionInputRef.current!.value;
    const address = addressInputRef.current!.value;

    const meetupData: Meetup = {
      id: 0,
      title: title,
      image: image,
      description: description,
      address: address,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleMeetupSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
