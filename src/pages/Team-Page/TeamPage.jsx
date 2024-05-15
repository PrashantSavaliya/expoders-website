import React from 'react'
import './TeamPage.css'
import Navbar from '../../components/Navbar/Navbar'
import BackgroundPage from '../../components/Page-start-Background/BackgroundPage';
import aboutTeamPageImage from '../../assets/team_page_background.png';
import Footer from '../../components/Footer/Footer';
import team_img_1 from '../../assets/team_img_1.png'
import team_img_2 from '../../assets/team_img_2.jpeg'
import team_img_3 from '../../assets/team_img_3.png'
import team_img_4 from '../../assets/team_img_4.jpeg'

const TeamPage = () => {
    return (
        <>
            <Navbar />
            <div className="team-page-content">
                <BackgroundPage header='About Team' page_name='About Team' imageUrl={aboutTeamPageImage} />
            </div>
            <div className="container team-page">
                <h1>We proud Expoders</h1>
                <p>Expoders Solutions is provided with a team of analysts and programmers, formed by persons with experience in programming for more than 8 years. Also we are provided with graphic designers in minor number as regard to the programmers, both in staff and in relation of collaboration.</p>
                <p>Expoders Solutions does a programmer’s elegant selection, both for the technical quality and personal characteristics. The continuous training is from the Expoders Solutions creation as a priority bases. Considering proper facilities we are provided with an audio-visual classroom, where the formation meetings are carried out.</p>
                <h2>Meet Our Team</h2>
                <p>The success of an organization depends on the staffs, on how much they love their job and willing to dedicate.</p>
            </div>
            <div className="container teams">
                <div className="team-member">
                    <img src={team_img_1} alt="" />
                    <div>
                        <h2>Darshan Patel</h2>
                        <p>CEO & Founder</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={team_img_2} alt="" />
                    <div>
                        <h2>SHAILESH PRAJAPATI</h2>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={team_img_3} alt="" />
                    <div>
                        <h2>VIMAL PATEL</h2>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={team_img_4} alt="" />
                    <div>
                        <h2>KRUPALI JOSHI</h2>
                        <p>HR Manager</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TeamPage
