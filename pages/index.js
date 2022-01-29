import Head from 'next/head';
import Image from "next/image";
import { SignupForm } from "../components/Signup";
import siteMetadata from '../data/siteMetadata';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    type: siteMetadata.type,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: siteMetadata.canonicalUrl
  }

  return (
    <div className="min-h-screen bg-[#0F0F21] py-24 flex justify-center items-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <link rel="canonical" href={meta.canonicalUrl} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="CSS Art Challenge" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
      </Head>
      <main className="px-4 space-y-24">
        <div className="max-w-2xl mx-auto space-y-12 text-center">
          <div>
            <span className="text-xl font-semibold tracking-wide text-pink-500 uppercase md:text-xl">
              css art challenge
            </span>
            <h1 className="py-2 text-6xl font-extrabold text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Coming Soon
            </h1>
          </div>
          <h2 className="text-2xl leading-loose md:leading-relaxed md:text-3xl text-slate-300">
            Win prizes and enhance your CSS skills by completing monthly
            challenges with the community.
          </h2>
          <SignupForm />
        </div>
        <div className="max-w-2xl mx-auto">
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
                  Hey there,{" "}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
                </span>{" "}
                I’m Braydon - a full-stack developer, blogger and the creator of
                this web app.{" "}
                <span className="hidden md:block">
                  I love all things related to front-end development and love
                  connecting with individuals.
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
        </div>
      </main>
    </div>
  );
}