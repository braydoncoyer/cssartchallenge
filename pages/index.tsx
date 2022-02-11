import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { AuthorCTA } from '@/components/AuthorCTA'
import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import { PostFrontMatter } from 'types/PostFrontMatter'
import Script from 'next/script'
import { SignupForm } from '@/components/Signup'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

const features = [
  {
    name: 'Monthly challenges',
    description:
      'A new challenge is posted each month with information about the challenge, how to apply and an introduction to the months sponsor.',
    icon: (
      <svg className="absolute h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 4.75V8.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 4.75V8.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 10.75H16.25"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Get crafting',
    description:
      'After reading the requirements, take the time to experiment, learn new techniques and craft your submission!',
    icon: (
      <svg
        className="absolute h-6 w-6 text-pink-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.75 13.25V10.25H8.25V11.25C8.25 11.8023 7.80228 12.25 7.25 12.25H5.75C5.19772 12.25 4.75 11.8023 4.75 11.25V5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H7.25C7.80228 4.75 8.25 5.19772 8.25 5.75V6.75H15C15 6.75 19.25 6.75 19.25 11.25C19.25 11.25 17 10.25 14.25 10.25V13.25M10.75 13.25H14.25M10.75 13.25V19.25M14.25 13.25V19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Submit your piece',
    description: `When you're ready, submit your CSS art to the community on Twitter using a special hashtag!`,
    icon: (
      <svg
        className="absolute h-6 w-6 text-pink-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="7"
          cy="14"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="12"
          cy="14"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="9"
          cy="10"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="15"
          cy="10"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="12"
          cy="6"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="17"
          cy="14"
          r="1.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <path
          d="M9.5 19.25C9.5 19.25 9.25001 16.75 7 16.75C4.74999 16.75 4.75 19.25 4.75 19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 19.25C14.5 19.25 14.25 16.75 12 16.75C9.74999 16.75 9.5 19.25 9.5 19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.25 19.25C19.25 19.25 19.25 16.75 17 16.75C14.75 16.75 14.5 19.25 14.5 19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Win prizes',
    description:
      'After the deadline, a winner will be announced prior to the next challenge going live!',
    icon: (
      <svg
        className="absolute h-6 w-6 text-pink-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75 4.75H16.25V11C16.25 13.3472 14.3472 15.25 12 15.25C9.65279 15.25 7.75 13.3472 7.75 11V4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.5 6.75H16.6036C18.0652 6.75 19.25 7.93483 19.25 9.39639C19.25 10.5092 18.5538 11.5032 17.508 11.8835L16.5 12.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.5 6.75H7.39639C5.93483 6.75 4.75 7.93483 4.75 9.39639C4.75 10.5092 5.44618 11.5032 6.49201 11.8835L7.5 12.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 15.5V19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.75 19.25H15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
]

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-1 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <Link href="/">
              <a className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                <span className="rounded-full bg-pink-500 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  New
                </span>
                <span className="ml-4 text-sm">See this month's challenge</span>
                <svg className="ml-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                  ></path>
                </svg>
              </a>
            </Link>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Complete CSS challenges and</span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-transparent">
                win monthly prizes
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat.
            </p>
            <div className="mt-10 sm:mt-12">
              <SignupForm />
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
            <img
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-3xl font-extrabold text-transparent">
              A better way to enhance your CSS skillset
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Making layouts can only teach you so much. Instead of making the same thing over and
              over again, learn new techniques by completing exciting monthly challenges.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  {feature.icon}
                  <p className="ml-9 text-lg font-medium leading-6 text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <AuthorCTA />
    </>
  )
}

// ;<div className="divide-y divide-gray-500">
//   <div className="max-w-2xl mx-auto space-y-12 text-center">
//     <div>
//       <span className="text-xl font-semibold tracking-wide text-pink-500 uppercase md:text-xl">
//         css art challenge
//       </span>
//       <h1 className="py-2 text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text md:text-8xl">
//         Coming Soon
//       </h1>
//     </div>
//     <h2 className="text-2xl leading-loose text-slate-300 md:text-3xl md:leading-relaxed">
//       Win prizes and enhance your CSS skills by completing monthly challenges with the community.
//     </h2>
//     <SignupForm />
//   </div>
//   <AuthorCTA />
// </div>

{
  /* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
        </ul> */
}
{
  /* {posts.length > MAX_DISPLAY && (
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
      )} */
}

{
  /* <div className="space-y-8 text-center">
        <PageTitle>
          Learn CSS. Win prizes. <br /> Complete monthly challenges!
        </PageTitle>
        <button className="inline-flex items-center justify-center px-5 py-3 space-x-2 font-medium text-white transform rounded-lg shadow-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.89062 9.28125L4.87279 17.7937C4.44606 18.628 5.29889 19.5379 6.16008 19.1671L14.6016 16.1875"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.3196 10.9774C14.9594 12.8695 15.698 15.085 14.9691 15.9259C14.2403 16.7669 12.3202 15.9147 10.6804 14.0226C9.04057 12.1305 8.30205 9.91499 9.03085 9.07406C9.75966 8.23313 11.6798 9.08527 13.3196 10.9774Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.49994 17.6367C8.90314 17.2553 8.27339 16.707 7.68032 16.0227C7.28976 15.5721 6.95033 15.1031 6.66968 14.6387"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11.5 5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.75 9.25L15.8787 9.12132C17.0503 7.94975 17.0503 6.05025 15.8787 4.87868L15.75 4.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17 13.0001L17.2929 12.7072C17.6834 12.3167 18.3166 12.3167 18.7071 12.7072L19 13.0001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>View challenge</span>
        </button>
      </div>
      <div className="mt-12 prose prose-lg">
        <span className="text-xl font-semibold tracking-wide text-pink-500 uppercase md:text-xl">
          March Challenge:
        </span>
        <PageTitle>Shadows</PageTitle>
        <p>Take part in this month's challenge by creating landscapes in CSS.</p>
        <Link href="/challenges">
          <a>View challenge details &rarr;</a>
        </Link>
      </div>
      <div>
        <AuthorCTA />
      </div> */
}
