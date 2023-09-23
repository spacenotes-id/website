import { P, match } from 'ts-pattern'

type TFallbackValuePayload<TValue, TFallback> = {
  value: TValue
  fallback: TFallback
}

export function fallbackValue<TValue, TFallback>(
  payload: TFallbackValuePayload<TValue, TFallback>,
) {
  return match(payload.value)
    .with(P.nullish, () => payload.fallback)
    .with(
      P.when((value) => typeof value === 'number' && isNaN(value)),
      () => payload.fallback,
    )
    .otherwise((value) => value)
}

type TFallbackElementPayload<TComponent extends React.ComponentType> = {
  component?: TComponent | null
  onSucces(Component: TComponent): JSX.Element
}
export function fallbackElement<TProps extends React.ComponentType>(
  payload: TFallbackElementPayload<TProps>,
) {
  return match(payload.component)
    .with(P.nullish, () => null)
    .otherwise((value) => payload.onSucces(value as TProps))
}
