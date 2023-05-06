import { NavLink } from 'react-router-dom';

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className="home-page-template naxatw-flex naxatw-gap-4 naxatw-flex-col naxatw-w-screen naxatw-h-screen naxatw-bg-black naxatw-text-white">
      <div className="cover naxatw-w-[70%] naxatw-m-auto naxatw-flex naxatw-flex-col naxatw-gap-1">
        <h1 className="first-letter:naxatw-text-6xl naxatw-text-2xl">
          Hi developer, I am your React Starter Kit -
          <p className="naxatw-bg-[#FFDC1C] naxatw-text-center naxatw-px-1 naxatw-inline naxatw-text-black naxatw-font-bold">
            {' '}
            version-2
          </p>
        </h1>
        <p className="naxatw-text-2xl naxatw-font-thin">Ready to dive deeper into my features?</p>
        <NavLink
          to="/dashboard"
          className="naxatw-text-[#FFDC1C] naxatw-font-light naxatw-text-xl naxatw-flex naxatw-justify-start naxatw-items-start naxatw-gap-4 naxatw-cursor-pointer"
        >
          Let's rock and roll! <small className="naxatw-animate-pulse naxatw-text-3xl">&rarr;</small>
        </NavLink>
      </div>
    </div>
  );
}
