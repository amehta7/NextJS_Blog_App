import React from 'react'
import classes from './posts-grid.module.css'
import PostItem from './PostItem'

const PostsGrid = (props) => {
  const { posts } = props

  return (
    <ul className={classes.grid}>
      {posts && posts.map((p) => <PostItem key={p.slug} post={p} />)}
    </ul>
  )
}

export default PostsGrid
