import { HorozcopoIconName } from "../../../../models/Horozcopo"

const asignIcon=(signo:string):HorozcopoIconName=>{
    let has=(selectedSign:string)=>signo.toString().toLocaleLowerCase().includes(selectedSign.toLocaleLowerCase())
    if (has("sagit")) {
        return "zodiac-sagittarius"
    } 
    else if (has("pis")||has("pic")) {
       return "zodiac-pisces"
    }
    else if (has("scorp")) {
        return "zodiac-scorpio"
    }
    else if (has("taur")) {
        return "zodiac-taurus" 
        
    }
    else if (has("can")) {
       return "zodiac-cancer"
    }
    else if (has("leo")) {
        return "zodiac-leo"
    }
    else if (has("capri")) {
        return "zodiac-capricorn"
    }
    else if (has("gem")) {
     return "zodiac-gemini"   
    }
    else if (has("aries")) {
        return "zodiac-aries"
    }
    else if (has("aqua")) {
    return "zodiac-aquarius"
    }
    else if(has("libre")){
        return "zodiac-libra"
    }else{
       return  "zodiac-virgo" 
    }

  }

  export default asignIcon