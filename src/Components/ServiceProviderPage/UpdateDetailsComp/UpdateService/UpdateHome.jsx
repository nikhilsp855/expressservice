import React from 'react'
import { Heading } from './Heading'
import { UserList } from './UserList'

export const UpdateHome = (props) => {
    return (
        <>
            <h3 className= 'card card-header'>Update Service Details</h3>
            <Heading/>
            <UserList accessToken={props.accessToken}/>
        </>
    )
}
