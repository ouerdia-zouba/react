import type React from "react"
import style from './Button.module.css'
interface IButtonProps {
    titre: string;
    color?: string;
    type?: "reset" | "submit" | "subuttonbmit"; 
    children: React.ReactNode|string|Array<React.ReactElement|string>;
}
const  Button:React.FC<IButtonProps> = ({type='button', children}) => {
    
    return <div className={style.Button}>{children}</div>
};
export default Button;