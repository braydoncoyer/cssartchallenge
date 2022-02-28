import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <PageTitle>404</PageTitle>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">
          <button className="right-2 top-2 inline-flex transform items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 font-medium text-white shadow-sm hover:opacity-80">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  )
}
