import Layout from '../components/Layout'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Layout title='About Fronta'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Fronta Blog</h3>

        <p className='mb-3'>This is a blog built with Next.js and Markdown by 
          <Link href="https://www.abshukla.com/" target="_blank" className='ml-1 font-bold text-gray-900'>Abhishek Shukla</Link>
        </p>

        <p>
          <span className='font-semibold'>More content to be added soon :) </span>
        </p>
        <p>
          <span className='font-semibold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}