import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'
import { SignupForm } from '@/components/Signup'
import { AuthorCTA } from '@/components/AuthorCTA'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-500">
        <div className="mx-auto max-w-2xl space-y-12 text-center">
          <div>
            <span className="text-xl font-semibold uppercase tracking-wide text-pink-500 md:text-xl">
              css art challenge
            </span>
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-6xl font-extrabold text-transparent md:text-8xl">
              Coming Soon
            </h1>
          </div>
          <h2 className="text-2xl leading-loose text-slate-300 md:text-3xl md:leading-relaxed">
            Win prizes and enhance your CSS skills by completing monthly challenges with the
            community.
          </h2>
          <SignupForm />
        </div>
        <AuthorCTA />
        {/* <div className="max-w-2xl mx-auto">
          <div className="flex mt-10">
            <div className="self-center flex-shrink-0 mr-4">
              <Image
                className="rounded-full"
                width="80"
                height="80"
                src="/avatar.jpeg"
                alt="Braydon Coyer"
              />
            </div>
            <div>
              <p className="text-base text-slate-300">
                <span className="block font-bold">
                  Hey there,{' '}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
                </span>{' '}
                I’m Braydon - a full-stack developer, blogger and the creator of this web app.{' '}
                <span className="hidden md:block">
                  I love all things related to front-end development and love connecting with
                  individuals.
                </span>
              </p>
              <a
                className="text-purple-400 underline italics hover:text-purple-500"
                href="https://braydoncoyer.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about me
              </a>
            </div>
          </div>
        </div> */}
        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}