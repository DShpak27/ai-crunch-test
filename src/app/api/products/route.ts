import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/mock-data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page')
      ? parseInt(searchParams.get('page') || '')
      : 1;
    const limit = searchParams.get('limit')
      ? parseInt(searchParams.get('limit') || '')
      : 8;

    if (isNaN(page) || isNaN(limit)) {
      return NextResponse.json(
        { message: 'Invalid page or limit parameter' },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      totalPages: Math.ceil(products.length / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching products' },
      { status: 500 }
    );
  }
}
