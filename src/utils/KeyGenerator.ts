export const KeyGenerator = (initials:string,limit:number)=>{
    let result = initials;
    let baseLetters = "XYZA97053BCDPQRSTEF80417GHIJKLMNOUVW29365";

    for(let x = 0; x < limit; x++){
        result = result + baseLetters[Math.floor(Math.random() * baseLetters.length)]
    }

    return result;
}