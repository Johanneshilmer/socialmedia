import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Något gick fel vid hämtning av användare' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { username, email } = await request.json();

    // Kontrollera om både användarnamn och e-post finns
    if (!username || !email) {
      return NextResponse.json({ error: 'Både användarnamn och e-post krävs' }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: { username, email },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Något gick fel vid skapande av användare' }, { status: 500 });
  }
}
