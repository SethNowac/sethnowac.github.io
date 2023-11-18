import Card from "../components/Card";
import CarDodgeImage from "../images/car_dodge_screenshot.png";
import CarDodgeGame from "../projects/games/CarDodge.zip"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 1500 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1500, min: 1100 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1100, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function downloadFile(filename, filepath) {
    const link = document.createElement('a');
    link.href = filepath;
    link.setAttribute(
    'download',
    filename,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
}

export default function Projects() {
    return (
        <div style={{
            margin:"40px"
        }}>
            <h1 style={{
                color: "#dddfea"
            }}>Games</h1>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all 0.4s ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <Card image={CarDodgeImage} callback={()=> {
                        downloadFile(`CarDodge.zip`, CarDodgeGame);
                    }}
                >
                    <h1>Car Dodge</h1>
                </Card>
            </Carousel>
        </div>
    )
}