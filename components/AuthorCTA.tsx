import Image from 'next/image'

export function AuthorCTA() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mt-10 flex">
        <div className="mr-4 flex-shrink-0 self-center">
          <Image
            className="rounded-full"
            width="80"
            height="80"
            src="/static/images/avatar.jpeg"
            alt="Braydon Coyer"
          />
        </div>
        <div>
          <p className="text-base text-gray-300">
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
            className="italics text-indigo-400 underline hover:text-indigo-600"
            href="https://braydoncoyer.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about me
          </a>
        </div>
      </div>
    </div>
  )
}
