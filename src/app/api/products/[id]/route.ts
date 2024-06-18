import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/mock-data';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}
