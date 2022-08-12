import React from "react"
import SignUptext from "../components/SignUpText"
import { useUserContext } from "../hooks/useUserContext"

export default function Support() {
    const { user } = useUserContext()

    const imgUrl = 'https://www.pngkey.com/png/full/437-4371260_hello-kitty-bandaid-transparent.png'
    const firstLink = 'https://armyinform.com.ua/2022/06/15/psyhologichna-dopomoga-pid-chas-vijny-kudy-zvernutys/'
    const secLink = 'https://unitedgmh.org/support/'
    const thirdLink= 'https://www.instagram.com/nastyaemo4'
    return (
      <div>
        <div className="support">
          <div className="support-img column">
            <img className="support-img" src={imgUrl} alt="Cute Plasters"/>
          </div>
          <div className="links">
            <p><a className="link" href={firstLink}>For Ukrainians </a>{'(бережіть себе <3)'}</p>
            <p><a className="link" href={secLink}>Mental Health Support Resources</a></p>
            <p><a className="link" href={thirdLink}>Contact to the App Creator {'(me <3)'}</a></p>            
          </div>
        </div>
        </div>
    ) 
}