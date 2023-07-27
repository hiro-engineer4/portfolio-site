import Link from "next/link";

const NavigationItems = ["profile", "portfolio", "skill", "contact"];

export const Navigation = () => {
  return (
    <nav id="navigation">
      <ul className="flex justify-center items-center py-8">
        <li className="hidden md:block md:mr-12">
          <Link href="/" className="text-stone-500 hover:text-indigo-300">
            HOME
          </Link>
        </li>
        {NavigationItems.map((item) => (
          <li className="mr-4 md:mr-12" key={item}>
            <a
              className="text-stone-500 hover:text-indigo-300"
              href={`#${item}`}
            >
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
