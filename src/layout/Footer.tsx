const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{" "}
          <a href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
            Jeremias Villane (forked from sozonome/vite-react-tailwind-starter)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
