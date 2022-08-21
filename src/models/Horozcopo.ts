export interface IHorozcopo{
    timeStamp:string,
    items:IHorozcopoItem []
}

export interface IHorozcopoItem{
    signo:string,
    consejo:string,
}

export type HorozcopoIconName="zodiac-sagittarius"|"zodiac-pisces"|"zodiac-taurus"
|"zodiac-scorpio"|"zodiac-cancer"|"zodiac-virgo"|"zodiac-leo"|"zodiac-capricorn"
|"zodiac-gemini"|"zodiac-libra"|"zodiac-aries"|"zodiac-aquarius"