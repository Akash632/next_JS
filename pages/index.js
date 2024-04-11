import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
function Home() {

  const router = useRouter();
  const handleClick = () => {
    router.push('/products');
  }
  return (
    <div>
        {/* <h1>Home Page</h1>
        <Link href="/blogs"> Blog </Link>
        <Link href="/products">Products</Link>
        <button onClick={handleClick}>
          go to products
        </button> */}
        <h1>Next JS pre-rendering with Data</h1>
    </div>
  )
}

export default Home;