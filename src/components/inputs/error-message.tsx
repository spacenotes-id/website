import { P, match } from 'ts-pattern'

type TProps = {
  error?: string | null
}

export function InputErrorMessage(props: TProps) {
  return match(props.error)
    .with(P.nullish, () => null)
    .otherwise((error) => <p className='pt-1 text-xs/none text-red-500'>{error}</p>)
}
