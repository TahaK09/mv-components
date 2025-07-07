export default function ApplyCard({ title, description, button }) {
  return (
    <section className="flex justify-center">
      <div className="rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-600 to-fuchsia-500 p-10 text-white shadow-2xl w-full max-w-5xl relative overflow-hidden">
        {/* Decorative blurred circle */}
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-fuchsia-400 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-3 z-10">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent drop-shadow-lg">
              {title}
            </h2>
            <p className="mb-8 text-violet-100 text-lg">{description}</p>
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-7 py-3 font-semibold text-violet-700 shadow-lg hover:bg-violet-50 transition-all duration-200"
              href="/university-hiring#university-application"
            >
              {button}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center justify-center md:col-span-2 z-10">
            <div className="relative h-44 w-44 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-violet-500/60 blur-md"></div>
              <div className="relative flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-400 via-indigo-400 to-fuchsia-400 h-40 w-40 shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap h-20 w-20 text-white drop-shadow-lg"
                  aria-hidden="true"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
