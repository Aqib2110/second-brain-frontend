export interface ButtonProps{
variant:"primary" | "secondary" | "default",
size:"sm" | "md",
text:string,
disable?:boolean,
startIcon?:any,
endIcon?:any,
onClick :()=>void
}
const variantStyle = {
    "primary":"bg-[#5046E4] text-white",
    "secondary":"bg-[#E0E7FF] text-[#5046E4]",
    "default":"bg-[#DDDDDD]"
}
const sizeStyle = {
    "sm":"px-2 py-1 ",
    "md":"px-4 py-2",
    "lg":"px-6 py-3"
}

export const Button = (props:ButtonProps)=>{
    return <button 
        className={`${variantStyle[props.variant]} flex justify-center items-center gap-2 cursor-pointer   ${sizeStyle[props.size]}   rounded-lg`}
        onClick={props.onClick}
    disabled={props.disable}
     >
        {props.startIcon && <span>{props.startIcon}</span>}
        {props.text}
        {props.endIcon && <span>{props.endIcon}</span>}
    </button>
}
