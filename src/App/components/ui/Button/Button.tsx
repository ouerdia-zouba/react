import React from 'react'
interface IButtonProps {
    titre: string;
    color?: string;
    type?: "reset" | "submit" | "subuttonbmit"; 
}
const  Button: React.FunctionComponent<IButtonProps>=({titre='button'} ) => {
    console.log(titre);
    return <div>{titre}</div>
};
export default Button;