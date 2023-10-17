import cl from './button.module.css';
import {FC} from "react";

interface ButtonProps {
    btnColor?: string,
    textColor?: string,
    children?: any,
    onClick?: () => | Promise<any> | any | void | undefined | null,
    props?: any,
}

const Button: FC<ButtonProps> = ({ btnColor, textColor, children, onClick, ...props }) => {
    return (
        <div className={cl.btn}>
            <button
                className={cl.myButton}
                onClick={onClick}
                {...props}
                style={{ backgroundColor: btnColor, color: textColor }}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;