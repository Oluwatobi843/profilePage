import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

function App(){
  return(
    <div className='card'>

    <Avatar/>

      <div className="data">
        <Intro/>


        <SkillList/>
      </div>
    </div>
  )
}

function Avatar(){
  return(
    <img className='avatar' src="tee.jpg" alt="" />

  )
}

function Intro(){
    return(
      <div>
        <h1> Tee Tech</h1>
        <p>Full-Stack web developer and teacher at udemy. When not coding or preparing a course, i like to play board games, to cook and eat, or to just enjoy the portugese sun at the  beach.</p>
      </div>
    )
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='React' emoji='👌' color='#123456'/>
      <Skill skill='HTML & CSS' emoji='🙌' color='orangered'/>
      <Skill skill='Javascript' emoji='💪🏻' color='yellow'/>
      <Skill skill='Webdesign' emoji='👩🏻‍🦰' color='orange'/>
    </div>
  )
}

function Skill(props){

  return(
    <div className="skill" style={{ backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
 
}

// Latest Version of ReactApp
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)