import Link from 'next/link';

export default function Home() {
  return (
    <div>
      hello world
      <Link href='/about'>About</Link>
      <Link href='/awesome'>Awesome</Link>
    </div>
  );
}
