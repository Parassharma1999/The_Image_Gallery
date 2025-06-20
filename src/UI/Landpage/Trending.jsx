import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Trending = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-center text-xl">Trending</p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-11/12"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" sm:1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 "
            >
              <div className="p-1">
                <Card className="max-h-96 overflow-hidden">
                  <CardContent className="p-0 flex aspect-square flex-col">
                    <div className="h-3/5 w-full">
                      <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="px-2 py-2 h-2/5">
                      <p className="font-bold">Title</p>
                      <p className="">Lorem, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quibusdam molestias vitae obcaecati cumque, nostrum, ducimus provident dolorem, at reprehenderit similique qui commodi id laboriosam. Est doloremque vel quae sequi! ipsum dolor sit amet consectetur adipisicing elit. Officia vitae repellendus unde quaerat nobis fugiat earum eum fugit labore ratione eaque necessitatibus consequuntur atque iure, consectetur, rem ea pariatur veritatis.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Trending;
