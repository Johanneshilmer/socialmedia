import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      include: { author: true }, // om du har relation till user
    });
    return res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    const { title, content, authorId } = req.body;
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          author: { connect: { id: authorId } },
        },
      });
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ error: 'Misslyckades med att skapa post' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
