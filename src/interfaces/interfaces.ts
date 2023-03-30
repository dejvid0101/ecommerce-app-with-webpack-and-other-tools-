

export interface Item {
    Name: string,
    Address:string
}

export interface rawItems{
recordset:Item[]
}

//prop drilling type for item cards
export interface ItemProps{
    Item:Item
  }