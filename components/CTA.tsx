'use client';
import { useRouter } from 'next/navigation';
export default function CTA() {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push('/contact');
  }

  return (
    <>
      <div className="cta-container">
        <div className="ctaimage-container">
        <img className="cta-image"src='/cta-image.jpg'></img>
        </div>
        <div className="ctacontent-container">
        <h2>Ready to build something amazing?</h2>
        <p>Lets talk about your next big idea.</p>
         <button className="border-2 cta-button" onClick={handleClick}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
