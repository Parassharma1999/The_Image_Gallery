import Navbar from "./UI/CommonComponent/Navbar/Navbar";
import NavScroller from "./UI/CommonComponent/Navbar/NavScroller";
import Trending from "./UI/Landpage/Trending";
import { MainCarousel } from "./UI/MainCarousel/MainCarousel";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* !------------------------ NAVBAR ---------------------------------! */}
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>

      {/* !--------------------------- NAV SCROLLER ----------------------------! */}
      <header className="w-full overflow-hidden">
        <NavScroller />
      </header>

      {/* !------------------------------- MAIN CONTENT-----------------------! */}
      <div className="flex gap-6 p-4 flex-col">
        <section className="grid h-1/4 w-full grid-cols-2 grid-rows-[450px] gap-1">
          <p>onvert any image into AI dance viddeo uncle ji.</p>
          <MainCarousel />
          <div className="flex flex-col h-full w-full gap-1 ">
            <div className="grid  h-1/2 w-full grid-cols-2 gap-1">
              <MainCarousel />
              <MainCarousel />
            </div>
            <div className="grid h-1/2 w-full gap-1">
              <MainCarousel />
            </div>
            <h3>Hello welome to the master of india chef.</h3>
          </div>
        </section>
        <section>
          <Trending />
        </section>
      </div>
    </div>
  );
}
