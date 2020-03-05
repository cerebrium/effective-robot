import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router, 
    Route,
    Link
  } from "react-router-dom"
  import { passProps } from '../App'

const FirstRoute: React.FC<passProps> = (props: passProps) => {
    
    const [ time, setTime ] = useState(new Date())

    useEffect( () => {
        setInterval( () => {
            setTime(new Date())
        }, 1000)
        console.log(props)
    }, [])

    return (
        <div className='overallDiv'>
            <div className='hamburgerBar'>
                <div className='navigation'>
                    <h2 className='navigationTitle'>Navigation</h2>
                    <div className='navigation-dropdown'>
                        <Link to="/second" className='links'>Second </Link>
                        <Link to="/second" className='links'>Third </Link>
                        <Link to="/second" className='links'>Fourth </Link>
                        <Link to="/second" className='links'>Fifth </Link>
                        <Link to="/second" className='links'>Sixth </Link>
                    </div>
                </div>

            </div>
            <div className='title'>
                Title
            </div>
            <div className='header'>
                <div className='clockBox'>
                    <div className='clock'>
                        {time.toLocaleDateString() + ' ' + time.toLocaleTimeString()}
                    </div>
                </div>
            </div>
            <div className='content'>
                <div>
                    Hello
                </div>
            </div>
        </div>
    )
}

export default FirstRoute