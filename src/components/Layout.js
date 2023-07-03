import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({title, keywords, description, children}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel='icon' href='/favicon.png' />
        </Head>
        <Header />
        <main className='container mx-auto my-7'>{children}</main>
        {/* <h1 className='bg-green-300'>Header 1</h1> */}
    </div>

  )
}

export default Layout

Layout.defaultProps = {
    title: 'Welcome to Fronta',
    keywords: 'frontend, javascript, react, typescript, nextJS',
    description: 'The blog where you get to know the quirks'
}