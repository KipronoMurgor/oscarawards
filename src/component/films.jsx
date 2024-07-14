import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Films() {
    const films = [
        { name: "Reservoir Dogs", image: "/Reservoir Dogs.jpg" },
        { name: "The Lord of the Rings", image: "/public/The LordOf Rings.jpg" },
        { name: "Star Wars", image: "/Star Wars.jpg" },
        { name: "The Godfather", image: "/The Godfather.jpg" },
        { name: "The Dark Knight", image: "/The Dark Knight.jpg" },
        { name: "The Shawshank Redemption", image: "/The Show Shank Reedemption.jpg" },
        { name: "Jaws", image: "/Jaws.jpg" },
        { name: "Pulp Fiction", image: "/Pulp Fiction.jpg" },
        { name: "Avengers", image: "/Avengers.jpg" },
        { name: "Raiders of the Lost Ark", image: "/Raiders Of The Lost Ark.jpg" },
        { name: "Goodfellas", image: "/Good Fellas.jpg" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="main-content">
            <h2>My Best Films</h2>
            <Slider {...settings}>
                {films.map((film, index) => (
                    <div key={index} className="film-item">
                        <div className="film-container">
                            <img src={film.image} alt={film.name} className="film-image" />
                            <span>{film.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .main-content {
                    margin: 20px;
                }
                .film-item {
                    margin-bottom: 20px;
                }
                .film-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .film-image {
                    width: 200px;
                    height: 300px;
                    margin-bottom: 10px;
                }
                .film-item span {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
