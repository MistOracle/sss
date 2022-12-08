import styled, { css } from "styled-components";

interface HBProps{
    pos?:string;
    top?:number;
    right?:number;
    left?:number;
    bottom?:number;
    table?:boolean;
}

export const HoverBlock = styled.div<HBProps>`
    position:${({ pos })=>pos??""};
    top:${({ top })=>top??""};
    right:${({ right })=>right??""};
    bottom:${({ bottom })=>bottom??""};
    left:${({ left })=>left??""};
    display:${({ table })=>table?"table":""};
    :hover{
        cursor: pointer;
    }
`
interface TitleProps {
    color?:string;
    size?:number | string;
    bold?:boolean;
    align?:string;
    table?:boolean;
    query?:boolean;
    large?:boolean;
    big?:boolean;
    small?:boolean;
    smaller?:boolean;
    underline?:boolean;
    pos?:string;
    vertical?:boolean;
    transform?:string;
    glow?:string;
    through?:boolean;
    font?:string;
}

export const Title:any = styled.div<TitleProps>`

    font-size: ${({ size,large,big,small,smaller })=>(size as number)? size + 'vh':'4vh'};
    font-size: ${({ size,small,smaller,big })=> (size as string)?size:small?"calc(15px + 1.7vw)":smaller?"calc(13px + 1.6vw)":big?"calc(22px + 2.8vw)":"calc(20px + 2vw)" };

    font-family: ${({ font })=>font??"'DMSans',sans-serif" }; 

    color: ${({ color })=>color??''};
    font-weight: ${({ bold,large })=>large?'bold':bold?'bold':'normal'};
    text-align: ${({ align })=>align??''};
    display: ${({ table })=>table?'table':''};
    word-wrap: break-word;
    text-decoration: ${({ underline })=>underline?"underline":""};
    text-decoration: ${({ through })=>through?"line-through":""};
    position:${({ pos })=>pos??""};
    writing-mode: ${({ vertical })=>vertical?"vertical-rl":""};
    text-orientation: ${({ vertical })=>vertical?"mixed":""};
    text-transform:${({ transform })=>transform??""};
    :hover{
        color:${({ glow })=>(glow as string)??""};
    }
`
interface TBProps{
    oc?:string;//outline color
    phc?:string;// placeholder color
    size?:number;// font size
    color?:string;// text color
}
export const TextBox = styled.textarea<TBProps>`
    padding:1vh;
    background: none;
    resize: none;
    border-radius:1vh;
    font-size: ${({ size })=>size? size + 'vh':'3vh'};
    outline:0.2vh solid lightgrey;
    width:100%;
    border: none;
    color:${({ color })=>color??""};
    :focus {
        outline:0.2vh solid ${({ oc })=>oc??"lightgrey"};
    }
    ::placeholder {
        color:${({ phc })=>phc??"lightgrey"};
    }
`
interface BoxProps{
    bgd?:string;
    p?:number;
    br?:number;
    ph?:number;
    pv?:number;
    m?:string;
    mv?:number;
    mh?:number;
    table?:boolean;
    bc?:string;
    w?:number | string;
    h?:number | string;
    maxH?:number | string;
    pos?:string;
    sb?:boolean; //small border
    empty?:boolean;
    flow?:string;
    zi?:number;
    noBd?:boolean;
}

export const Box:any = styled.div<BoxProps>`
    width:${({ w })=>(w as number)? w + 'vh':(w as string)?w:''};
    min-height:${({ h })=>(h as number)? h + 'vh':(h as string)?h:"auto"} !important;
    max-height:${({ maxH })=>(maxH as number)? maxH + 'vh':(maxH as string)?maxH:"auto"} !important;
    padding:${({ p,ph,pv })=>p && !ph && !pv? p + 'vh':'2vh'};
    padding-left:${({ ph })=>ph? ph + 'vh':''};
    padding-right:${({ ph })=>ph? ph + 'vh':''};
    padding-top:${({ pv })=>pv?  pv + 'vh':''};
    padding-bottom:${({ pv })=>pv?  pv + 'vh':''};
    margin:${({ m })=>m?m:""};
    margin-top:${({ mv })=>mv?mv + 'vh':''};
    margin-bottom:${({ mv })=>mv?mv + 'vh':''};
    margin-left:${({ mh })=>mh?mh + 'vh':''};
    margin-right:${({ mh })=>mh?mh + 'vh':''};
    border-radius: ${({ br })=>br? br + 'vh':'3vh'};
    box-sizing: border-box;
    display: ${({ table })=>table?'table':''};
    position:${({ pos })=>pos??""};
    overflow:${({ flow })=>flow??""};
    z-index:${({ zi })=>zi??""};
    background: ${({ bgd })=>bgd??""};
    border:${({ sb })=>sb?'0.2vh':'0.6vh'} solid 
    ${({ bc,noBd })=>noBd?'inherit':bc??'none'};
    ${({ empty })=>!empty && css`
        /* -webkit-box-shadow: 0px 0px 4px 1px rgba(217,217,217,1);
        -moz-box-shadow: 0px 0px 4px 1px rgba(217,217,217,1);
        box-shadow: 0px 0px 4px 1px rgba(217,217,217,1); */
        -webkit-box-shadow: 0px 0px 10px 2px rgba(227,227,227,1);
        -moz-box-shadow: 0px 0px 10px 2px rgba(227,227,227,1);
        box-shadow: 0px 0px 10px 2px rgba(227,227,227,1);
        /* -webkit-box-shadow: 0px 0px 300px 10px rgba(212,212,212,1);
        -moz-box-shadow: 0px 0px 300px 10px rgba(212,212,212,1);
        box-shadow: 0px 0px 300px 10px rgba(212,212,212,1); */
    `}
`
interface BtnProps{
    border?:number;
    br?:number;
    p?:number;
    size?:number;
    bgd?:string;
    bold?:boolean;
    display?:string;
    color?:string;
}
export const SimpleButton = styled.button<BtnProps>`
    border:${({ border,color })=>border?` ${border}vh solid ${color??""}`:'none' };
    border-radius:${({ br })=>br?`${br}vh`:'1vh'};
    padding:${({ p })=>p?`${p}vh`:'1vh'};
    font-size:${({ size })=>size?`${size}vh`:'1vh'};
    background:transparent;
    color:${({ color })=>color??""};
    font-weight: ${({ bold })=>bold?'bold':''};
    transition: all 0.3s ease-in-out;
    width:100%;
    :hover{
        cursor: pointer;
    }
    :active{
        background: rgba(255,255,255,0.35);
    }
`

export const FillButton = styled.button<BtnProps>`
    border:none;
    border-radius:${({ br })=>br?`${br}vh`:'0.8vh'};
    padding:${({ p })=>p?`${p}vh`:'1vh'};
    font-size:${({ size })=>size?`${size}vh`:'1vh'};
    background:${({ bgd })=>bgd??""};
    color:${({ color })=>color??'whitesmoke'};
    font-weight: ${({ bold })=>bold?'bold':''};
    display: ${({ display })=>display??""};
    transition: all 0.3s ease-in-out;
    width:100%;
    :hover{
        cursor: pointer;
    }
    :active{
        outline:0.55vh solid ${ ({ bgd })=>bgd };
        background: lightgrey;
    }
`
interface FlexProps {
    justify?:string;
    align?:string;
    column?:string;
    full?:boolean;
    fw?:boolean;
}

export const Flex:any = styled.div<FlexProps>`
    display: flex;
    align-items: ${({ align })=>align??'center'};
    justify-content: ${({ justify})=>justify??'start'};
    flex-direction: ${({ column })=>column?'column':''};
    width:${({ full })=>full?'100%':''};
    flex-wrap: ${({ fw })=>fw?'wrap':'nowrap'};
`
interface FCProps {
    flex?:number
}

export const FlexChild = styled.div<FCProps>`
    flex:${({ flex })=>flex??1};
`
export const FlexChildFlex = styled(Flex)`
    flex:${({ flex })=>flex??1};
`
interface IBProps{
    bgd?:string;
    mw?:string;
}
interface DividerProps {
    m?:number;
    mh?:string | number;
    mv?:string | number;
    size?:number;
    color?:string;
    b?:number;
}

export const Divider = styled.div<DividerProps>`
    margin:${({ m,mh,mv })=>m? m + 'vh': "3vh"};
    margin-top:${({ mv })=>mv?mv + 'vh':''};
    margin-bottom:${({ mv })=>mv?mv + 'vh':''};
    margin-left:${({ mh })=>(mh as number)?mh + 'vh':(mh as string)?mh:''};
    margin-right:${({ mh })=>(mh as number)?mh + 'vh':(mh as string)?mh:''};
    font-weight:${( b )=>b?'bold':''};
    border:${({ b })=>b??0}vh solid ${({ color })=>color??"grey"};
    border-radius: 10vh;
    width:100%;
`
interface MProps {
    mh?:number;
}

export const Marginalize:any = styled.div<MProps>`
    margin:${({ mh })=>mh? `0 ${mh + 'vh'} `:'0 0.5vh'};
`

interface TagProps{
    p?:number;
    size?:number;
    color?:string;
    br?:number;
    bc?:string;
    filled?:boolean;
    bgd?:string;
    pos?:string;
    top?:string;
    bottom?:string;
    right?:string;
    left?:string;
    w?:number;
}
export const Tag = styled.div<TagProps>`
    min-width: ${({ w })=>w?w + "vh":""};
    border:${({ bc })=>bc?"0.3vh solid " + bc :""};
    border-radius: ${({ br })=>br?br + "vh":"1vh"};
    font-size: ${({ size })=>size?size + "vh":"3vh"};
    padding:${({ p })=>p?p + "vh":"0.3vh"};
    font-weight: bold;
    transition:all 0.3s ease-in-out;
    display: table;
    background: ${({ filled,bgd })=>filled && bgd?bgd:"transparent"};
    position:${({ pos })=>pos??""};
    top:${({ top })=>top??""};
    bottom:${({ bottom })=>bottom??""};
    right:${({ right })=>right??""};
    left:${({ left })=>left??""};
    display:grid;
    place-items:center;
    cursor:pointer;
`
interface ProgressProps{
    w?:number;
    h?:number;
    bgd?:string;
}
export const ProgressIndicator = styled.div<ProgressProps>`
    height:${({ h })=>h?h + 'vh':'1vh'};
    background:${({ bgd })=>bgd??"lightgrey"};
    border-radius: 5vh;
    position: relative;
    width:${({ w })=>w?w + '%':'100%'};
`
export const Progress = styled.div<ProgressProps>`
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    border-radius: 10px;
    background:${({ bgd })=>bgd??""}; 
    width:${({ w })=>w?w + '%':'50%'};
`
interface PIProps{
    border?:number;
    w?:number;
    bc?:string;
}
export const ProfileImg = styled.img<PIProps>`
    width:${({ w })=>w?w + 'vw':'6vw'};
    height:${({ w })=>w?w + 'vw':'6vw'};
    border-radius: 50%;
    border:${({ border })=>border?border + "vh":"0vh"} solid ${({ bc })=>bc??""};
`
interface ContainerProps{
    h?:number | string;
    w?:number | string;
    br?:number | string;
    p?:number;
    ph?:number;
    pv?:number;
    m?:number | string;
    mh?:string | number;
    mv?:number;
    maxH?:number | string;
    minH?:number | string;
    maxW?:number | string;
    minW?:number | string;
    center?:boolean;
    table?:boolean;
    bgd?:string;
    flow?:string;
    flowX?:string;
    flowY?:string;
    border?:number;
    bc?:string;
    pos?:string;
    zIndex?:number;
    animate?:string;
    transX?:string;
    transY?:string;
    display?:string;
    pointer?:boolean;
    round?:boolean;
    centralize?:boolean;
    hoverBgd?:string;
    borderStyle?:"dashed" | "solid";
    shadow?:boolean;
    bstyle?:string;
    bcolor?:string;
    btop?:string;
    bbottom?:string;
    bleft?:string;
    bright?:string;
    align?:string;
    justify?:string;
    button?:boolean;
    shadowColor?:string;
}

export const Container = styled.div<ContainerProps>`
    max-height:${({ maxH })=>(maxH as number)? maxH + 'vh':"auto"} !important;
    max-height:${({ maxH })=>(maxH as string)? maxH:"auto"} !important;

    min-height:${({ minH })=>(minH as number)? minH + 'vh':"auto"} !important;
    min-height:${({ minH })=>(minH as string)? minH:"auto"} !important;

    max-width:${({ maxW })=>(maxW as number)? maxW + 'vh':"auto" } !important;
    max-width:${({ maxW })=>(maxW as string)? maxW:"auto" } !important;
 
    min-width:${({ minW })=>(minW as number)? minW + 'vh':"auto" } !important;
    min-width:${({ minW })=>(minW as string)? minW:"auto" } !important;

    height: ${({ h })=>(h as number)? h + 'vh':''};
    height: ${({ h })=>(h as string)?h:''};

    width:${({ w })=>( w as number )? w + 'vh':''};
    width:${({ w })=>(w as string)? w:''};

    border-radius:${({ br })=>(br as number)?br + 'vh':''};
    border-radius:${({ br })=>(br as string)??''}; 

    border:${({ border,borderStyle })=>border?`${border}vh ${ borderStyle??"solid" }`:''} ${({ bc })=>bc??''};
    padding:${({ p })=>p?p + 'vh':''};
    padding-top:${({ pv })=>pv?pv + 'vh':''};
    padding-bottom:${({ pv })=>pv?pv + 'vh':''};
    padding-left:${({ ph })=>ph?ph + 'vh':''};
    padding-right:${({ ph })=>ph?ph + 'vh':''};

    border-top:${({ btop,bstyle,bcolor })=> `${btop} ${bstyle??"solid"} ${bcolor??""}` };
    border-bottom:${({ bbottom,bstyle,bcolor })=> `${bbottom} ${bstyle??"solid"} ${bcolor??""}` };
    border-left:${({ bleft,bstyle,bcolor })=> `${bleft} ${bstyle??"solid"} ${bcolor??""}` };
    border-right:${({ bright,bstyle,bcolor })=> `${bright} ${bstyle??"solid"} ${bcolor??""}` };

    margin:${({ m })=>(m as string)?m:''};
    margin:${({ m })=>(m as number)?m + 'vh':''};

    margin-top:${({ mv })=>mv?mv + 'vh':''};
    margin-bottom:${({ mv })=>mv?mv + 'vh':''};

    margin-left:${({ mh })=>(mh as number)?mh + 'vh':''};
    margin-left:${({ mh })=>(mh as string)?mh:''};

    margin-right:${({ mh })=>(mh as number)?mh + 'vh':''};
    margin-right:${({ mh })=>(mh as string)?mh:''};
    
    display:${({ table,display })=>table?'table':display??''};
    background:${({ bgd })=>bgd??''};
    position:${({ pos })=>pos??"relative"};
    justify-content:${({ justify })=>justify??""};
    align-items:${({ align })=>align??""};
    overflow:${({ flow })=>flow??""};
    overflow-x: ${({ flowX })=>flowX??""};
    overflow-y: ${({ flowY })=>flowY??""};
    z-index: ${({ zIndex })=>zIndex??""};
    transition:${({ animate })=>animate??""};
    transform: translateX(${({ transX })=>transX });
    transform: translateY(${({ transY })=>transY });
    box-sizing: border-box;

    ${ ({ shadow,shadowColor })=>shadow && css`
        -webkit-box-shadow: 1px 1px 25px 1px ${shadowColor??"rgba(181,181,181,1)"};
        -moz-box-shadow: 1px 1px 25px 1px ${shadowColor??"rgba(181,181,181,1)"};
        box-shadow: 1px 1px 25px 1px ${shadowColor??"rgba(181,181,181,1)"};
    `}

    cursor:${ ({ pointer })=>pointer?"pointer":"" };

    ${({ centralize })=>centralize && css`
        display:grid;
        place-items: center;
    `}

    :hover{
        background:${ ({ hoverBgd })=>hoverBgd??"" };
    }

    ${({ button })=>button && css`
        :active{
            background:grey;
        }
    `}
`
interface ACProps{
    w?:number;
    bgd?:string;
    size?:number;
    box?:boolean;
    pos?:string;
    top?:string;
    left?:string;
    right?:string;
}

export const AlertCount = styled.div<ACProps>`
    width:${({ w })=>w? w + '%':'30%'};
    height:${({ w })=>w? w + '%':'30%'};
    border-radius:${( box )=>box?'2vh':'50%'};
    background:${({ bgd })=>bgd??'crimson'};
    position:${({ pos })=>pos??"absolute"};
    display: grid;
    place-items: center;
    top:${({ top })=>top??""};
    left:${({ left })=>left??""};
    right:${({ right })=>right??""};
    -webkit-box-shadow: 0px 0px 300px 10px rgba(212,212,212,1);
    -moz-box-shadow: 0px 0px 300px 10px rgba(212,212,212,1);
    box-shadow: 0px 0px 300px 10px rgba(212,212,212,1);
`
interface PointerProps{
    bc?:string | boolean;
    w?:number;
    bgd?:string;
    pos?:string;
    x?:number;
    y?:number;
}

export const Pointer = styled.div<PointerProps>`
    position:${({ pos })=>pos??''};
    bottom:0;
    right:0;
    transform: translateX(${({ x })=>x??'0'});
    transform: translateY(${({ y })=>y??'0'});
    width:${({ w })=>w?`calc(10px + ${w}vh)`:'calc(10px + 1vh)'};
    height:${({ w })=>w?`calc(10px + ${w}vh)`:'calc(10px + 1vh)'};
    border-radius: 50%;
    background:${({ bgd })=>bgd??'grey'};
    border:2.2px solid ${({ bc })=>
    (bc as boolean)?'transparent':
    (bc as string)??""};
`