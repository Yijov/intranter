

//editar ambos

const NAVIGATION_ROUTES={
    HOROZCOPOS:"Horozcopo",    //main
    MULTAS:"Multas",    //main
    MULTAS_CONSULTAR:"Consultar Multas",
    MULTAS_CREAR:"Crear Multa",
    MULTAS_MAPA:"Mapa de Multas",
    MEDIA:"Media",    //main
    CLIMA:"Clima",     //main
    VEHICULOS:"Vehiculos",    //main
    NOTICIAS:"Noticias",    //main
    CONDUCTORES:"Conductores",    //main
    AUTH:"Log In",
    HOME:"Home",
    TARIFARIO:"Tarifario",    //main
} as const


export default NAVIGATION_ROUTES;

export const MAIN_NAVIGATION_ROUTES_AS_CONST= {
    MULTAS:"Multas",
    MEDIA:"Media",
    CLIMA:"Clima",
    VEHICULOS:"Vehiculos",
    CONDUCTORES:"Conductores",
    TARIFARIO:"Tarifario",
} as const

export type RootNavigationParamList = {
    Multas:undefined,
    Media:undefined,
    Vehiculos:undefined,
    Clima:undefined,
    Tarifario:undefined,
    Conductores:undefined,
 }

