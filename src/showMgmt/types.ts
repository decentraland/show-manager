

export type ShowDataType ={
  defaultShow:ShowType
  shows: ShowType[]
}
export type ShowType = {
  id: number
  link: string
  subs?: string
  startTime?: number
  length?: number
  artist: string
}

export type ShowTypePlayListType = {
  lastShow: ShowType
  currentShow: ShowType
  nextShow: ShowType
}

//export let currentlyPlaying: number | null

export type StopShowEvent={
  
}

export type PlayShowEvent={
  showData: ShowType
  offsetSeconds: number
  videoTexture?: VideoTexture
}


export type ShowResultType={
  show:ShowType
  offset: number
}

export type ShowMatchRangeResult = {
  lastShow?: ShowResultType
  currentShow?: ShowResultType
  nextShow?: ShowResultType
}
