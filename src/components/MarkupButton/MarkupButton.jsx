import { Button } from "./MarkupButton.styled"

export const MarkupButton = ({ title,width,onClick }) => {
    return (
        <Button style={{width:width}} onClick={onClick}>{title}</Button>
        )
}