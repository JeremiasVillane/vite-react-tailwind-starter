const publicPath = import.meta.env.VITE_PUBLIC_PATH;

const onHover =
  "hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.33)] hover:scale-110 transition-all duration-200";

const SomeText = () => {
  return (
    <div className="grid gap-2.5">
      <div className="flex items-end justify-between gap-6 [&>*]:size-20">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={`${publicPath}/assets/vite-logo.svg`}
            alt="Vite logo"
            className={onHover}
          />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={`${publicPath}/assets/react-logo.svg`}
            alt="React logo"
            className={onHover}
          />
        </a>

        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${publicPath}/assets/ts-logo.svg`}
            alt="TypeScript logo"
            className={onHover}
          />
        </a>

        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src={`${publicPath}/assets/tailwind-logo.svg`}
            alt="Tailwind CSS logo"
            className={`mt-4 ${onHover}`}
          />
        </a>

        <a href="https://forums.docker.com/" target="_blank" rel="noreferrer">
          <img
            src={`${publicPath}/assets/docker-logo.svg`}
            alt="Docker logo"
            className={`mt-3 ${onHover}`}
          />
        </a>
      </div>
      <h1 className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        vite-react-typescript-tailwind-docker-starter
      </h1>
    </div>
  );
};

export default SomeText;
