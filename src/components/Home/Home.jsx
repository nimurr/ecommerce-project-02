import Comdown from "./Comdown";

export default function Home() {
    return (
        <div>
            <div className="flex lg:flex-row flex-col gap-4">
            <div className="carousel lg:w-8/12 h-[80vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/RNbsgB3/Banner-board-800x420-2.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.rcwatches.com/media/bannerRolexSeadweller.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.oneidadispatch.com/wp-content/uploads/migration/2021/04/d0205060058d03d50f38bde29084c781.jpg?w=620" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="h-[80vh] ">
                <img className="h-full w-full lg:w-auto" src="https://img.freepik.com/free-vector/flat-colorful-sale-background_23-2147723253.jpg?w=740&t=st=1695153243~exp=1695153843~hmac=525746ae70169a7a83396b5d1e992d2ae7b2a85f491eae13b4f4c744f6213571" alt="" />
            </div>
            </div>
            <Comdown></Comdown>
        </div>
    )
}
