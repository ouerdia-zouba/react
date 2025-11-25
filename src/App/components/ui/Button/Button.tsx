
interface IButtonProps {
    titre: string;
    color?: string;
    type?: "reset" | "submit" | "subuttonbmit"; 
}
const  Button=({titre='button'}: IButtonProps) => {
    console.log(titre);
    return <div>{titre}</div>
};
export default Button;