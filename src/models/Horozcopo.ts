export interface IHorozcopo{
    timeStamp:string,
    items:IHorozcopoItem []
}

export interface IHorozcopoItem{
    signo:string,
    consejo:string,
}