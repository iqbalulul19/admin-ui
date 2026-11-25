import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignIn from '../components/Fragments/FormSignIn'
import { Link } from 'react-router-dom'

function signIn() {
  return (
    <AuthLayout>
        <FormSignIn />
    </AuthLayout>
  )
}

export default signIn