// import Image from 'next/image'
import Info from "./Info";
import Header from "./Header";
import Banner from "./Banner";
import Menu from "./Menu";
import QuickBuy from "./QuickBuy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2">
      <Info />
      <Header />
      <Banner />
      <Menu />
      <QuickBuy />
    </main>
  );
}
