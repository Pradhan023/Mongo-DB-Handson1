import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import sev from '../assets/sev.png'
import eig from '../assets/eig.png'
import '../Component/style.css'

const QA = () => {
  return (
    <div className="Container">
        <h1>Handson 1 Mongo DB</h1>
        <h2>Create a database , give it name like "Human_Resource". Create a collection inside this named "employee"</h2>
        <img src={one} />
        <hr/>
        <h2>Query the collection "employee" and list all the documents</h2>
        <img src={two} /><br/>
        <img src={three} />
        <hr/>
        <h2>Query the collection "employee" and list the employees who are having salary more than 30000</h2>
        <img src={four} />
        <hr/>
        <h2>Query the collection "employee" and list the employees who are having experience more than 2 years.</h2>
        <h2>Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year </h2>
        <img src={five} />
        <hr/>
        <h2>Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.</h2>
        <img src={six} />
        <hr/>
        <h2>Delete all the documents from "employee" where last company is Y</h2>
        <img src={sev} /><br/>
        <img src={eig} />
        <hr/>
    </div>
  )
}

export default QA