import type { GetStaticProps, NextPage } from 'next';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { Meetup, PrismaClient } from '@prisma/client';
import Head from 'next/head';

const prisma = new PrismaClient();

export const getStaticPaths = async () => {
  const meetups = await prisma.meetup.findMany();

  const paths = meetups.map((meetup: Meetup) => {
    return {
      params: {
        meetupId: meetup.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params!.meetupId;

  const meetup = await prisma.meetup.findUnique({
    where: {
      id: +meetupId!,
    },
  });

  return {
    props: {
      meetup,
    },
  };
};

interface Props {
  meetup: Meetup;
}

const MeetupDetails: NextPage<Props> = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.title} />
      </Head>
      <MeetupDetail meetup={meetup} />
    </>
  );
};

export default MeetupDetails;
