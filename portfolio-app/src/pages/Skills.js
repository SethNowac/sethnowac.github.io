import ListWithTwoColumns from '../components/ListWithTwoColumns'
import './Projects.css'

export default function Skills() {
    const front_end_skills= ["HTML5", "React", "CSS", "ASP.NET Core", "WPF"]
    const back_end_skills= ["JavaScript", "Python", "C#", "Java", "Kotlin"]
    const database_skills= ["SQL Server", "MySQL", "MongoDB", "Entity Framework"]
    const scripting_skills= ["PowerShell", "Bash"]

    return (
        <div style={{
            justifyContent: "center",
            textAlign: "center"
        }}>
            <h1 className="fade" style={{
                    color: "#dddfea",
                    fontSize: "70px",
                    fontWeight: "bold",
                    marginBottom: "60px",
                    marginTop:"80px",
                    textAlign: "center",
            }}>Skills</h1>

            <div style={{
                margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea",
                    marginBottom: "30px"
                }}>Front-End Technologies</h1>
                <div className='slide'>
                    <ListWithTwoColumns items={front_end_skills}/>
                </div>
            </div>

            <div style={{
                margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea",
                    marginBottom: "30px"
                }}>Back-End Technologies</h1>
                <div className='slide'>
                    <ListWithTwoColumns items={back_end_skills}/>
                </div>
            </div>

            <div style={{
                margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea",
                    marginBottom: "30px"
                }}>Database Technologies</h1>
                <div className='slide'>
                    <ListWithTwoColumns items={database_skills}/>
                </div>
            </div>

            <div style={{
                margin:"40px"
            }}>
                <h1 className="fade" style={{
                    color: "#dddfea",
                    marginBottom: "30px"
                }}>Scripting Technologies</h1>
                <div className='slide'>
                    <ListWithTwoColumns items={scripting_skills}/>
                </div>
            </div>
        </div>
    )
}