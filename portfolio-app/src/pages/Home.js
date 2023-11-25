import Card from "../components/Card";
import NavButton from "../components/NavButton";
import './Home.css';

export default function Home() {
    const interests = ["Software Development", "Web Design", "Game Development", "Art", "3D Modeling", "Animation", "Music"]

    return(
            <div style={{
                textAlign: "center",
                margin: "120px 60px",
                justifyContent: "center",
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea",
                    fontSize: "80px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                }}>Seth Nowac</h1>
                <h3 className="fade" style={{
                    color: "#b9b9c9",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "0"
                }}>Software Developer</h3>
                <hr className="fade-slide" style={{
                    maxWidth: "70%",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}/>
                <div className="fade-slide" style={{
                    color: "#dddfea",
                    fontSize: "17px",
                    fontWeight: "normal",
                    fontFamily: "serif",
                    margin: "auto",
                    maxWidth: "70%"
                }}>
                    <p>I am a software developer currently based in the Greater Metropolitarian Area. 
                    I am in my third year at John Abbott College studying Computer Science Technology, passionate about
                    various aspects of the field such as game development and web design.
                    </p>
                    <br/>

                </div>
                <div className="fade-slide" style={{ 
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    marginBottom: "80px",
                    position:"relative",
                    left:"7px"
                }}>
                    <NavButton to="/skills" label="Current Skills" styled={true}/>
                    <NavButton to="/projects" label="View my Projects" styled={true}/>
                </div>
                <div className="fade-slide" style={{
                    color: "#dddfea",
                    backgroundColor: "#2c3754",
                    borderRadius: "10px",
                    padding: "5px 5px 20px 5px",
                    maxWidth: "72%",
                    margin: "auto"
                }}>
                    <h1>Interests</h1>
                    {interests.map((element) => (
                        <p1 style={{
                            fontFamily: "monospace",
                            color: "#dddfea",
                            padding: "10px 20px",
                            margin: "10px",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            fontWeight: "normal",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "gray",
                            borderRadius: "7px"
                        }}>{element}</p1>
                    ))}

                </div>
            </div>
    )
}