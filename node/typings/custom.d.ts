export interface Menu {
  id: string
  name: string
  icon: string
  slug: string
  styles: string
  menu: Menu[]
  display: boolean
  enableSty: boolean
  order: number
}
export interface MenuUpload {
  id: string
  name: string
  icon: string
  slug: string
  styles: string
  menu: string
  display: boolean
  enableSty: boolean
  order: number
}

interface Args {
  menuInput: Menu
}
interface ArgsUpload {
  menuData: [Menu]
}

export type Maybe<T> = T | void
