export const formatErrors = (e: any, setFieldError: Function) => {
  e.graphQLErrors.forEach((err: any) => {
    err.extensions.exception.validationErrors.forEach((err2: any) => {
      setFieldError(
        err2.property,
        err2.constraints[Object.keys(err2.constraints)[0]]
      )
    })
  })
}
