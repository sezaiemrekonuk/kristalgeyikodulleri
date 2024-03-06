import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const CustomSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        className: "lg:px-6 flex",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <div className={"px-2"}>
                <img src="https://via.placeholder.com/800x800" alt="Slider 1"/>
            </div>
            <div className={"px-2"}>

                <img src="https://via.placeholder.com/800x800" alt="Slider 1"/>
            </div>
            <div className={"px-2"}>

                <img src="https://via.placeholder.com/800x800" alt="Slider 1"/>
            </div>
        </Slider>
    );

}

export default CustomSlider;