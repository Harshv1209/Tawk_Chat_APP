import React, { useState } from "react"
import FormProvider from "../../components/hook-form/FormProvider"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, Button, IconButton, InputAdornment, Stack } from "@mui/material"
import RHFTextField from "../../components/hook-form/RHFTextField"
import { Eye, EyeSlash } from "phosphor-react"

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("Email is Requied"),
    lastName: Yup.string().required("Email is Requied"),
    email: Yup.string()
      .required("Email is Requied")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is Requied"),
  })
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@tawk.com",
    password: "demo1234",
  }
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  })
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods
  const onSubmit = async (data) => {
    try {
      // submit the data to backend
    } catch (error) {
      console.log(error)
      reset()
      setError("afterSubmit", {
        ...error,
        message: error.message,
      })
    }
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message} </Alert>
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name={"firstName"} label="First Name" />
          <RHFTextField name={"lastName"} label="Last Name" />
        </Stack>
        <RHFTextField name={"email"} label="Email Address" />
        <RHFTextField
          name={"password"}
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            ":hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Create Account
        </Button>
      </Stack>
    </FormProvider>
  )
}

export default RegisterForm
