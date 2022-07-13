import { NextPage } from 'next';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { Meetup } from '@prisma/client';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NewMeetup: NextPage = () => {
  const router = useRouter();

  const handleAddMeetup = async (meetup: Meetup) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    router.replace('/');
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};

export default NewMeetup;
