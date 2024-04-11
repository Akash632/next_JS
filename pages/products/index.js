import React from 'react'
import Link from 'next/link';

function Products({products_id}) {
  return (
    <div>
        <h1>Products</h1>
        <ul>
          <Link href="/products/1">
          <li>Product 1</li>
          </Link>
          <Link href="/products/2">
          <li>Product 2</li>
          </Link>
          <Link href="/products/3">
          <li>Product 3</li>
          </Link>
          <Link href="/products/4">
          <li>Product 4</li>
          </Link>
          <Link href="/products/5">
          <li>Product 5</li>
          </Link>
          <Link href={`/products/${products_id}`}>
          <li>Product 1</li>
          </Link>
        </ul>

        <Link href="/">
        <button>
          Go back
        </button>
        </Link>
    </div>
  )
}

export default Products