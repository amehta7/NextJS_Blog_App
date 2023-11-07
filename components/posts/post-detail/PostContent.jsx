import React from 'react'
import classes from './post-content.module.css'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
}

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
