import { Input } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function SignupForm() {
    const { nameInputR, emailInputR, passwordInputR, rPasswordInputR } = useContext(AuthContext)
    return (
        <>
            <Input ref={nameInputR} label="Name" size="lg" />
            <Input ref={emailInputR} label="Email" size="lg" />
            <Input ref={passwordInputR} label="Password" size="lg" />
            <Input ref={rPasswordInputR} label="Confirm Password" size="lg" />
        </>
    )
}
