export interface State{
items:Item[],
tagaptcons:TagAptCon[],
tags:Tag[]

}

export interface Item {
    Name: string,
    Address:string,
    Id: number
}

export interface rawItems{
recordset:Item[]
}

export interface TagAptCon {
    AptId: number,
    TagId: number
}

export interface rawTagAptCon{
    
        ApartmentId:number,
        TagId:number
}

//prop drilling type for item cards
export interface ItemProps{
    Item:Item
  }

 export interface rawTagAptCons{
    recordset:rawTagAptCon[]
 }

 export interface Tag{
    Id:number,
    Name: string
 }

 export interface rawTags{
    recordset: Tag[]
 }

 export interface rawAptImgs{
    recordset: RawDBAptImg[];
 }

 export interface AptImg{
    AptId: number,
    ImgUrl: string
 }

 export interface RawDBAptImg{
    ApartmentId:number,
    Path:string
 }

 export interface RenderSettings{
isImg0:boolean,
isImg1:boolean,
isImg2:boolean,
isImg3orMore:boolean,
isTags0:boolean,
isTags1:boolean,
isTags2:boolean,
isTags3orMore:boolean
 }