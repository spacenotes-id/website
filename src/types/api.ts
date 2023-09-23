export type TApiErrorResponse = {
  error: string
}

export type TApiInvalidError = {
  errors: string[]
}

export type TApiSuccessResponse<TData = unknown> = {
  message: string
  data: TData
}
