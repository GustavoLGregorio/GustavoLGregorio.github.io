import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed top-0 w-full justify-between p-4 bg-[hsl(0,0%,100%,0.1)] backdrop-blur-sm">
      <Link href="/">Inicio</Link>
      <button>
        <i></i>
      </button>
      <nav className="hidden md:flex">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Projetos</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
