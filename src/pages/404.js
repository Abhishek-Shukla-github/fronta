import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function ErrorPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo.png'
          width={200}
          height={200}
          className='bg-gray-800 rounded-2xl'
          alt='Fronta Error Page logo'
        />

        <h1 className='text-6xl my-5'>Whoops!</h1>

        <h2 className='text-4xl text-gray-400 mb-5'>
          This page does not exist in Fronta
        </h2>
      </div>
    </Layout>
  )
}