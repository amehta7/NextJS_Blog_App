import React from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'

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

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </React.Fragment>
  )
}

export default Home
