export interface IHorozcopo{
    fecha:string,
    items:{
    sagitario:IHorozcopoItem,
    picis:IHorozcopoItem,
    aquiario:IHorozcopoItem,
    cancer:IHorozcopoItem,
    geminis:IHorozcopoItem,
    virgo:IHorozcopoItem,
    libra:IHorozcopoItem,
    escorpio:IHorozcopoItem,
    tauro:IHorozcopoItem,
    capricornio:IHorozcopoItem,
    aries:IHorozcopoItem,
    leo:IHorozcopoItem,
    }
}

export interface IHorozcopoItem{
    signo:string,
    consejo:string,
}