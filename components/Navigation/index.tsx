import Link from "next/link";

export const Navigation = () => {
  return (
    <nav id="navigation">
      <ul className="flex justify-center items-center py-8">
        <li className="hidden md:block md:mr-12">
          <Link href="/">
            <a className="text-stone-500 hover:text-indigo-300">HOME</a>
          </Link>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-indigo-300" href="#profile">
            PROFILE
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-indigo-300" href="#portfolio">
            PORTFOLIO
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-indigo-300" href="#skill">
            SKILL
          </a>
        </li>
        <li className="mr-4 md:mr-12">
          <a className="text-stone-500 hover:text-indigo-300" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};
