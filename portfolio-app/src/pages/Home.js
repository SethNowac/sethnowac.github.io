import Card from "../components/Card";
import NavButton from "../components/NavButton";

export default function Home() {
    const interests = ["Software Development", "Web Design", "Game Development", "Art", "3D Modeling", "Animation", "Music"]

    return(
            <div style={{
                textAlign: "center",
                margin: "120px"
            }}>
                <h1 style={{
                    color: "#dddfea",
                    fontSize: "80px",
                    fontWeight: "bold",
                    marginBottom: "0px",
                }}>Seth Nowac</h1>
                <h3 style={{
                    color: "#b9b9c9",
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "0"
                    
                }}>Software Developer</h3>
                <hr style={{
                    maxWidth: "70%",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}/>
                <div style={{
                    color: "#dddfea",
                    fontWeight: "normal",
                    fontFamily: "serif"
                }}>
                    <p>I am a software developer currently based in the Greater Metropolitarian Area. 
                    I am in my third year at John Abbott College studying Computer Science Technology, passionate about
                    various aspects of the field such as game development and web design.
                    </p>
                    <br/>

                </div>
                <div style={{ 
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "80px"
                }}>
                    <NavButton to="/skills" label="Current Skills" styled={true}/>
                    <NavButton to="/projects" label="View my Projects" styled={true}/>
                </div>
                <div style={{
                    color: "#dddfea",
                    backgroundColor: "#2c3754",
                    borderRadius: "5px",
                    padding: "5px"
                }}>
                    <h2>Interests</h2>
                    {interests.forEach(element => {
                        <p1>{element}</p1>
                    })}

                </div>
            </div>
    )
}