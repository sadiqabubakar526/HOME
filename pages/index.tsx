import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import BlogCard from "../src/components/BlogCard/BlogCard"
import Heading from "../src/components/Heading"
import { getAllPosts } from "../lib/blog"
import { PostFrontmatter } from "../src/types"

interface Props {
  posts: PostFrontmatter[]
}

const Index = ({ posts }: Props) => {
  const Posts = () => {
    return (
      <>
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: 40 }}>
            <BlogCard
              title={post.frontmatter.title}
              slug={post.frontmatter.slug}
              date={post.frontmatter.date}
            />
          </div>
        ))}
      </>
    )
  }

  return (
    <Layout>
      <Seo
        title="Home | Front End Developer based in Bauchi State, Nigeria"
        description="Front End Developer based in Bauchi State, Nigeria"
      />
      <div className="container">
        <div className="hero">
          <h2 className="hero__title">
            Hey, I&apos;M SERDYQ{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <h1 className="hero__text">
            Front End Developer based in Bauchi State, Nigeria
          </h1>
        </div>

        <div className="posts">
          <Heading level={2}>Blog Posts</Heading>
          <div className="posts__cardsContainer">
            <Posts />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
