import { Link, Stack, Typography } from "@mui/material"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import RegisterForm from "../../sections/settings/auth/RegisterForm"
import AuthSocial from "../../sections/settings/auth/AuthSocial"

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 2, position: "relative" }}>
        <Typography variant="h4">Get Started with Tawk</Typography>
        <Stack spacing={0.5} direction={"row"}>
          <Typography variant="body2">Already have an Account?</Typography>
          <Link to="/auth/login" component={RouterLink} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
        {/* Register form */}
        <RegisterForm />

        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By Signing up, I agree to "}
          <Link underline="always" color={"text.primary"}>
            Terms of Service
          </Link>
          {" and "}
          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  )
}

export default Register
