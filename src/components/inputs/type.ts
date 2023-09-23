export type TLabelInputProps = {
  withAsterisk?: boolean
  htmlFor: string
  label: string
}

export type THelpTextInputProps = {
  help?: string
}

export type TInputComponentProps = Omit<React.ComponentPropsWithRef<'input'>, 'placeholder'> & {
  placeholder: string
  error?: string
} & TLabelInputProps &
  THelpTextInputProps

export type TPasswordInputProps = Omit<TInputComponentProps, 'type'>
