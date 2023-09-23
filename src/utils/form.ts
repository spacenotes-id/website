import type { FieldValues, FormState } from 'react-hook-form'

export function getErrorFields<TData extends FieldValues>(data: FormState<TData>) {
  return data.errors
}
