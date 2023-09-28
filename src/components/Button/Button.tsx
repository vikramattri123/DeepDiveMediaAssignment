import { Link } from "react-router-dom";

interface AsButton {
    aslink?:undefined;
    url?:undefined

}

interface AsLink  {
    aslink:true;
    url:string;
}


type ButtonProps = (AsButton | AsLink) & {
    butttonText:string;
    color?:string;
    backgroundColor?:string;
} 



const Button = ({butttonText,backgroundColor='#A75E31',color="white",aslink,url}:ButtonProps) => {

    const styles = {
        color,
        backgroundColor,
        padding:'12px 8px',
        width:'180px',
        cursor:'pointer',
        letterSpacing:'.1em',
    }
    if(aslink) return <Link to={url}>
    <button  style={{...styles,textTransform:'uppercase'}}  >{butttonText}</button>

    </Link>
   return (
    <button  style={{...styles,textTransform:'uppercase'}}  >{butttonText}</button>
   )
}

export default Button