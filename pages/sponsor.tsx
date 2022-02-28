import CustomLink from '@/components/Link'

export default function SponsorPage() {
  return (
    <>
      <div className="pb-24 lg:pb-0 prose prose-lg">
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Interested in sponsoring</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-transparent">
            CSS Art Challenge?
          </span>
        </h1>
        <div className="max-w-4xl text-lg">
          <p className="mt-3 text-gray-300 sm:mt-5">
            Thanks for your interest! I built this service to help people discover that CSS can be
            fun by providing an interactive, engaging and rewarding monthly program.
          </p>
          <p className="mt-3text-gray-300 sm:mt-5">
            If you'd like to provide a prize for an upcoming challenge, please consider reaching out
            to me on <CustomLink href="https://twitter.com/BraydonCoyer">Twitter</CustomLink> or
            sending me an email so we can discuss details!
          </p>
        </div>
      </div>
    </>
  )
}
