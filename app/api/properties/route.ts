// app/api/properties/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { uploadImage } from '@/lib/upload';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'location', 'bedrooms', 'bathrooms', 'area', 'image'];
    for (const field of requiredFields) {
      if (!formData.has(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate image file
    const imageFile = formData.get('image') as File;
    if (!(imageFile instanceof File)) {
      return NextResponse.json(
        { error: 'Invalid or missing image file' },
        { status: 400 }
      );
    }

    // Upload image and get URL
    const imageUrl = await uploadImage(imageFile);

    // Create property in database
    const property = await prisma.property.create({
      data: {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        price: parseFloat(formData.get('price') as string),
        location: formData.get('location') as string,
        bedrooms: parseInt(formData.get('bedrooms') as string),
        bathrooms: parseInt(formData.get('bathrooms') as string),
        area: parseFloat(formData.get('area') as string),
        imageUrl,
      },
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error('Error creating property:', error);
    return NextResponse.json(
      { error: 'Error creating property' },
      { status: 500 }
    );
  }
}
