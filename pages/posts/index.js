import React, { Fragment } from 'react'
import Head from 'next/head'
import AllPosts from '../../components/posts/AllPosts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production...',
    date: '2022-02-10',
  },
]

const AllPost = () => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default AllPost
