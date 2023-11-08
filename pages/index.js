import React from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import { getFeaturedPosts } from '../helper/posts-util'
import Head from 'next/head'

const Home = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>John's Next Blog</title>
        <meta
          name='description'
          content='I post about programming and web development!'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </React.Fragment>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 60, // 60 seconds
  }
}

export default Home
