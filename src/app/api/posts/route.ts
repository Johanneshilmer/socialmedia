import {prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);

  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Något gick fel vid hämtning av inlägg' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    
    // Kontrollera om både titel och innehåll finns
    if (!title || !content) {
      return NextResponse.json({ error: 'Både titel och innehåll krävs' }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: { title, content },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Något gick fel vid skapande av inlägg' }, { status: 500 });
  }
}