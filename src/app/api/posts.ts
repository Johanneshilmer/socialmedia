// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
      return res.status(400).json({ message: 'Title, content, and userId are required.' });
    }

    try {
      const post = await prisma.post.create({
        data: { title, content, userId: Number(userId) },
      });

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create post', error });
    }
  } else if (req.method === 'GET') {
    const posts = await prisma.post.findMany({
      include: { user: true },
    });
    res.status(200).json(posts);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
