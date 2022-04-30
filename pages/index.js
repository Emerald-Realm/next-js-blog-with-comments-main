import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { getAllCategories } from '../lib/api'
import { getAllAuthors } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'


export default function Index({ allPosts, preview, categories, authors }) {

  console.log(allPosts)
  console.log(categories)
  console.log(authors)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>

          <title>Feast with Freya</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

          {/* Hero section */}
          <div className='Hero section py-[10rem]' >
            {/* bgimage + text + header + cta */}
            <div className='context flex flex-col gap-4 max-w-lg px-4'>
              <h1 className='text-3xl'>Keep good food in your home, eat healthy and live healthy
                to be healthy and look healthy. <span className='font-cursive'>The Royal Lifestyle.</span></h1>
              <p className='text-xl'>Be worthy of a feast with the Queen</p>
              <button className='px-4 py-2 w-40 bg-black font-semi-bold text-white text-lg'>Get started</button>
            </div>
          </div>
          {/* features - a lifestyle blog, covering 1.fashion 2.Eating 3.Ettiqute etiquette 4.Self help*/}
          <div className='features section flex flex-col gap-4'>
            {
              categories.map((category) =>
                <div className='category-template' key={category._id}>
                  <p className='link'>{category.title}</p>
                </div>
              )
            }
            {/* card layout in flex, card formart - image on text(link) at the center & underlined on hover */}
          </div>
          {/* quote fullscreen section with quote tag and attachment */}
          <div className='quote section'>
            <blockquote>I'm a man of simple tastes. I'm always satisfied with the best.</blockquote>
            <p>― Oscar Wilde</p>
          </div>
          {/* featured posts - title + featured cards*/}
          <div className='featured section'>
            <h2>Featured Posts</h2>
            <div>
              {/* import featured lists | create template - image + title + author & stats  */}
              <div>
                <img src='#' />
                <h4>Happiness is a choice</h4>
                <div className='blog info'>
                  <div className='author'>
                    <img src='#' />
                    <p>Elonmusk</p>
                  </div>
                  <p>on today's date</p>
                </div>
              </div>
            </div>
          </div>
          {/* Recent posts */}
          <div className='recent section'>
            <h2>Checkout Our Recent Posts</h2>
            <div>
              {/* import recent lists | create template - image + title + author & stats  */}
              <div>
                <img src='#' />
                <h4>Happiness is a choice</h4>
                <div className='blog info'>
                  <div className='author'>
                    <img src='#' />
                    <p>Elonmusk</p>
                  </div>
                  <p>on today's date</p>
                </div>
              </div>
            </div>
          </div>
          {/* About us */}
          <div className='about section'>
            <img src='#' />
            <div className='context'>
              <h2>About us</h2>
              <p>evolve with us and feast with the royals</p>
            </div>
          </div>
          {/* testimonials - carousel & draw from api */}
          <div className='testimonials section'>
            <h2>What people are saying</h2>
            {/* import recent lists | create template - image + title + author & stats  */}
            <div>
              <p>i am happy</p>
              <p>jon doe</p>
            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const categories = await getAllCategories(preview)
  const authors = await getAllAuthors()
  return {
    props: { allPosts, preview, categories, authors },
    revalidate: 1
  }
}
