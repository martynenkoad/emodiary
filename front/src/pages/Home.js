import React from "react"
import SignUptext from "../components/SignUpText"
import { useUserContext } from "../hooks/useUserContext"
import { Link } from "react-router-dom"


export default function Home() {
    const firstLink = "https://i.pinimg.com/originals/bc/71/06/bc710646e058f1f0e5ac01e9904915cf.gif"
    const secLink ="https://i.pinimg.com/originals/9e/e8/7b/9ee87b78125b9e6a030e3ec4aa0921ed.gif"
    const thirdLink = "https://64.media.tumblr.com/7d2a236a457bacfad61fb097c18cc932/tumblr_pcrsl7p6ee1xbmldho1_400.gifv"

    const lastLink = "https://maidofdeath.carrd.co/assets/images/image02.gif?v=87bba02b"
    const {user} = useUserContext()

    return (
        <div className="home"> 
            <div className="home--top">
              <h1>Welcome to Emo Diary my friend!</h1>
              <h3>What is so called 'Emo Diary'?</h3>
            </div>
            <div className="home--section">
                <div className="card">
                  <h5>Space for real EMOs {':>'}</h5>
                  <img src={firstLink} alt="Real Emo Picture"/>
                </div>
 
                <div className="card">
                    <h5>Diary for heart brokens {'<3'}</h5>
                    <img src={secLink} alt="Heart Broken Picture" />
                </div>

                <div className="card">
                    <h5>Rest for your soul!!1!</h5>
                    <img src={thirdLink} alt="Restful Picture" />
                </div>
            </div>

            <section className="home--work-section">
                <div className="home--work-section-text">
                    <h2 className="home--head">Our goal is to make you happier {"<3"}</h2>
                    <p>Once you start using Emo Diary, you can share your emo feelings and stay sure that you are excepted and loved.
                        This app is used only by real EMOs who listen to 'Tokio Hotel' 24/7 and have those lovely bangs so you can 
                        join our space and feel the power of EMO team!
                    </p>
                </div>
                <div className="home--work-section-img">
                    <img src={lastLink} alt="emo girl with wings" />
                </div>
            </section>
            {!user && <div><SignUptext className="home-text" /></div>}
             
        </div>
    )
}
