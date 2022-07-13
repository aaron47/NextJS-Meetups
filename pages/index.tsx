import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { PrismaClient, Meetup } from '@prisma/client';
import Head from 'next/head';

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  // fetch data from an api
  const meetups = await prisma.meetup.findMany();

  return {
    props: {
      meetups,
    },
    revalidate: 10,
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // fetch data from an api
//   const meetups = DUMMY_MEETUPS;

//   // const req = ctx.req;
//   // const res = ctx.res;

//   return {
//     props: {
//       meetups,
//     },
//   };
// };

const Home: NextPage<any> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>NextJS + Prisma Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active NextJS Meetups"
        />
      </Head>

      <MeetupList meetups={meetups} />
    </>
  );
};

export default Home;
