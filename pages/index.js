import Image from "next/image";
import { SignupForm } from "../components/Signup";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F21] flex justify-center items-center">
      <main className="px-4 space-y-24">
        <div className="max-w-2xl mx-auto space-y-12 text-center">
          <div>
            <span className="text-xl font-semibold tracking-wide text-pink-500 uppercase md:text-xl">
              css art challenge
            </span>
            <h1
              className="py-2 text-6xl font-extrabold text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
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