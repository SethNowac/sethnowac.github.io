import Card from "../components/Card";
import CarDodgeImage from "../images/car_dodge_screenshot.png";

export default function Projects() {
    return (
        <div style={{
            margin:"40px"
        }}>
            <h1 style={{
                color: "#dddfea"
            }}>Games</h1>
            <Card image={CarDodgeImage} callback={()=> {

            }}>
                <h1>Car Dodge</h1>
            </Card>
        </div>
    )
}