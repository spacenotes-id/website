import type { Note } from './note'
import { generateNotes } from './note'

export type SpaceWithNotes = {
  id: number
  name: string
  notes: Note[]
  isFavorite: boolean
}
export const spaces: SpaceWithNotes[] = [
  { id: 1, name: 'Blog Posts', isFavorite: true, notes: generateNotes(2, 'blogposts') },
  { id: 2, name: 'College', isFavorite: false, notes: generateNotes(4, 'collegestuff') },
  { id: 3, name: 'High School', isFavorite: false, notes: generateNotes(7, 'highscool') },
  {
    id: 4,
    name: 'Adventure Of My Life Vol.3',
    isFavorite: true,
    notes: generateNotes(2, 'adv-life-vol3'),
  },
  {
    id: 5,
    name: 'Adventure Of My Life Vol.2',
    isFavorite: true,
    notes: generateNotes(10, 'adv-life-vol2'),
  },
  {
    id: 6,
    name: 'Adventure Of My Life Vol.1',
    isFavorite: true,
    notes: generateNotes(10, 'adv-life-vol1'),
  },
]

export const favSpaces = spaces.filter((space) => space.isFavorite)

export const allNotes = spaces.map((item) => item.notes).flat()
