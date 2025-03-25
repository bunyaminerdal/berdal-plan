'use client'

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"

const Signin = () => {
  return (
    <Button onClick={() => signIn()}>Signin</Button>
  )
}

export default Signin