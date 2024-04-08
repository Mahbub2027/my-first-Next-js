import Counter from "@/Components/Counter/Counter";
import Link from 'next/link';

const HomePage = () => {
  // throw new Error();

  return (
    <div>
      <div className="flex gap-5">
        <Link href='/about'>
          <button className="btn btn-sm btn-accent">About</button>
        </Link>
        <Link href='/banner'>
          <button className="btn btn-sm btn-accent">Banner</button>
        </Link>
        <Link href='/news'>
          <button className="btn btn-sm btn-accent">News</button>
        </Link>
      </div>
      <h1>This is my first next Js </h1>
      <Counter></Counter>

    </div>
  );
};

export default HomePage;