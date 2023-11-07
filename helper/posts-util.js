import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const FilePathDirectory = path.join(process.cwd(), 'data', 'posts')

export const getPostData = (fileName) => {
  const filePath = path.join(FilePathDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData
}

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(FilePathDirectory)

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  )

  return sortedPosts
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()

  const featuredPosts = allPosts.filter((post) => post.isFeatured)

  return featuredPosts
}
