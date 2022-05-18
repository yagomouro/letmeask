import { ButtonHTMLAttributes } from "react"
import { Btn } from "./styles"


interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isOutlined?: boolean;
}

export const Button = ({ isOutlined = false, ...props }: buttonProps) => {
    return (
        <>
            <Btn
                className={isOutlined ? "outlined" : ""}
                {...props}
            ></Btn>
        </>
    )
}