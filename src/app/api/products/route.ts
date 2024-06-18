import { NextResponse } from 'next/server';
import { products } from '@/data/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page') || '')
    : 1;
  const limit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit') || '')
    : 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return NextResponse.json({ products: paginatedProducts });
}
