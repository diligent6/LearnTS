export type homeDataType = Root2[]

export interface Root2 {
  : TagText
  tagDesc: any
  tagCode?: number
  tagLink: string
  aloneLine: boolean
  childTags: any
  checkBubble: boolean
}

export interface TagText {
  text: string
  color: string
  border: any
  tips: any
  background: Background
}

export interface Background {
  color: string
  image: any
  gradientColor: any
}
