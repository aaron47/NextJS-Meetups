// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Meetup, PrismaClient } from '@prisma/client';

type Data = {
  message: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const data: Meetup = req.body;

    const meetup = await prisma.meetup.create({
      data: {
        title: data.title,
        image: data.image,
        address: data.address,
        description: data.description,
      },
    });

    res.status(200).json({ message: 'Success' });
  }
}
