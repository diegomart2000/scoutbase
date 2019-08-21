export interface Country {
  code: string
  name: string
  phone?: string
  currency?: string
  continent?: Continent
  languages?: Array<Language>
}

export interface Language {
  code: string
  name: string
  native: string
}

export interface Continent {
  code: string
  name: string
}