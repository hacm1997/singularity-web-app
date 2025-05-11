import React from 'react'
import { RegisterForm } from './forms/RegisterForm'

export const ContentHome = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh] gap-10'>
            <h1 className='font-bold text-3xl'>Create New User</h1>
            <div>
                <RegisterForm />
            </div>
        </div>
    )
}
