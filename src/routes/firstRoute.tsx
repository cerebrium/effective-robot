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
    }, [])

    return (
        <div className='overallDiv'>
            <div className='hamburgerBar'>
                <Link to="/second">Second </Link>
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
                content
            </div>
        </div>
    )
}

export default FirstRoute