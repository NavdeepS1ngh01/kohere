'use client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push('/contact');
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Kohere</h1>
        </div>
        <div className="navbar-links patrick-hand-regular">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/project" className={pathname === '/project' ? 'active' : ''}>Projects</Link>
        </div>
        <div className="navbar-button-container">
          <button className="border-2 border-black navbar-button" onClick={handleClick}>Contact Us</button>
        </div>
      </div>
      <div className="navbar-underline"></div>
    </>
  );
}
