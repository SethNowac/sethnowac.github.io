import Card from "../components/Card";
import CarDodgeImage from "../images/car_dodge_screenshot.png";
import BudgetAppImage from "../images/budget_app_screenshot.png";
import CarDodgeGame from "../projects/games/CarDodge.zip"
import BudgetApp from "../projects/applications/BudgetApp.zip"
import Carousel from 'react-multi-carousel';
import TriviaAppImage from "../images/trivia_app_screenshot.png";
import TriviaApp from "../projects/applications/TriviaApp.zip"
import GameOrganizerImage from "../images/game_organizer_screenshot.png";
import MusicBrosImage from "../images/music_bros_screenshot.png";
import EscapeThxGame from "../projects/games/EscapeTheTHX.zip"
import EscapeThxImage from "../images/escape_thx_screenshot.png";
import 'react-multi-carousel/lib/styles.css';
import './Projects.css'
import { Link, NavLink } from 'react-router-dom';

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
        <>
            <h1 className="fade" style={{
                    color: "#dddfea",
                    fontSize: "70px",
                    fontWeight: "bold",
                    marginBottom: "60px",
                    marginTop:"80px",
                    textAlign: "center",
            }}>My Projects</h1>

            <div style={{
                margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea"
                }}>Games</h1>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={false}
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
                    className="slide"
                >
                    <Card image={CarDodgeImage} callback={()=> {
                            downloadFile(`CarDodge.zip`, CarDodgeGame);
                        }}
                        >
                        <h1>Car Dodge</h1>
                    </Card>
                    <Card image={EscapeThxImage} callback={()=> {
                            downloadFile(`EscapeTheTHX.zip`, EscapeThxGame);
                        }}
                        >
                        <h1>Escape The THX</h1>
                    </Card>
                </Carousel>
            </div>

            <div style={{
            margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea"
                }}>Applications</h1>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={false}
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
                    className="slide"
                >
                    <Card image={BudgetAppImage} callback={()=> {
                            downloadFile(`BudgetApp.zip`, BudgetApp);
                        }}
                    >
                        <h1>Budget App</h1>
                    </Card>

                    <Card image={TriviaAppImage} callback={()=> {
                            downloadFile(`TriviaApp.zip`, TriviaApp);
                        }}
                    >
                        <h1>Trivia App</h1>
                    </Card>
                </Carousel>
            </div>

            <div style={{
            margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea"
                }}>Websites</h1>
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={false}
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
                    className="slide"
                >
                    <NavLink to="https://game-organizer-front-end.onrender.com/"
                        style={{ color: 'inherit', textDecoration: 'none', cursor: 'default' }}>
                        <Card image={GameOrganizerImage} callback={()=> {
                            
                            }}
                        >
                            <h1>Game Organizer</h1>
                        </Card>
                    </NavLink>

                    <NavLink to="https://musicbros.000webhostapp.com"
                        style={{ color: 'inherit', textDecoration: 'none', cursor: 'default' }}>
                        <Card image={MusicBrosImage} callback={()=> {
                            
                            }}
                        >
                            <h1>Music Bros</h1>
                        </Card>
                    </NavLink>
                </Carousel>
            </div>
        </>
    )
}