import React, { Fragment } from 'react'
import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData, getPostsFiles } from '../../helper/posts-util'
import Head from 'next/head'

const SinglePost = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export const getStaticProps = (context) => {
  const { params } = context
  const { postId } = params

  const postData = getPostData(postId)

  //console.log(postId)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles()

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map((s) => ({ params: { postId: s } })),
    fallback: false,
  }
}

export default SinglePost
