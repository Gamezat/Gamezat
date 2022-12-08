import { Input } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function LoginForm() {
    const { emailInput, passwordInput } = useContext(AuthContext)

    return (
        <>
            <Input ref={emailInput} label="Email" size="lg" />
            <Input ref={passwordInput} label="Password" size="lg" />
        </>
    )
}
