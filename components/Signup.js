import { useSubscribeToNewsletter } from "../lib/useSubscribeToNewsletter";

function SignupForm() {
  const { subscribe, inputEl, form, formStatus } = useSubscribeToNewsletter();
  return (
    <div className="space-y-4 md:flex md:flex-col md:justify-start">
      <form className="relative w-full" onSubmit={subscribe}>
        <input
          ref={inputEl}
          placeholder="Enter your email"
          className="w-full px-5 py-5 border border-transparent bg-slate-800/50 rounded-md text-base text-white placeholder-gray-300 focus:placeholder-gray-400 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0F0F21]"
          type="email"
        />
        <button
          type="submit"
          className="absolute inline-flex items-center justify-center px-5 py-3 font-medium text-white transform rounded-lg shadow-sm right-2 top-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-80"
        >
          {formStatus === "LOADING" ? (
            "Loading..."
          ) : (
            <span className="inline-flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>

              <span>Notify me</span>
            </span>
          )}
        </button>
      </form>
      <div className="text-left">
        {formStatus === "ERROR" ? (
          <p className="tracking-tight text-red-400">{form?.message}</p>
        ) : formStatus === "SUCCESS" ? (
          <p className="tracking-tight text-purple-500">{form?.message}</p>
        ) : null}
      </div>
    </div>
  );
}

export { SignupForm };
