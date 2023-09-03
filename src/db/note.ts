export type Note = { id: string; name: string; body: string }

export function generateNotes(max: number, prefix: string | number) {
  const array = new Array(max)
  for (let i = 0; i < max; i++) {
    const note = {
      id: `${prefix}-${i}`,
      name: `Note number ${i} from ${prefix}`,
      body: 'lorem ipsum dolor sit amet adpisicing elit',
    }
    array[i] = note
  }

  return array as Note[]
}
