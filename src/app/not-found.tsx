import Link from 'next/link';
import './not-found.css'
export default function NotFound() {
  return (
    <main className='flex flex-col justify-center items-center text-white min-h-screen'>
      <span>Page Not Found._.</span>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster my-5">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <Link href={"/"}>Click here to return home page</Link>
    </main>
  );
}
