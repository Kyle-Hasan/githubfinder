import React from 'react'
import {useContext} from 'react'
import AlertContext from './context/AlertContext'
function Alert() {
    const {alert} = useContext(AlertContext)
    return (
       alert !== null && (
           <p className="flex items-start mb-4 space-x-2">{alert.type}</p>
       )
    )
}

export default Alert
