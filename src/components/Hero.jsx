import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex items-center justify-between w-full mb-10 pt-3">
        <div className="">
          <img src={logo} alt='Logo' className="w-14 object-contain"/>

          <h3 className="ml-4 text-2xl font-semibold">
            Xtract and Sumz
          </h3>
        </div>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/YuraTadevosyan", "_blank")
          }
          className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black"
        >
          GitHub
        </button>
      </nav>

      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Summarize and Extract Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-3xl">
        Simplify your reading with Xtract and Sumz, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
