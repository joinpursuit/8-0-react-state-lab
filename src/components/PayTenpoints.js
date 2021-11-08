import React from 'react'

const  PayTenpoints =  (props) => {

  console.log(props)
    return (
        <div>
            <button onClick={props.onClick}> {`Pay 10 points to change from`} +{props.start} to +{props.next}</button>
        </div>
    )
}

export default PayTenpoints
