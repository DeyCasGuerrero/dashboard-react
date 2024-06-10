import * as React from "react"
import { SvgIconsProps } from "../../types/SvgTypes"
const SvgLinkedIcon:React.FC<SvgIconsProps> = ({size,color, ...props}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={size}
        height={size}
        className="hover:scale-125 duration-200 hover:cursor-pointer"
        viewBox="0 0 32 32"
        {...props}
    >
        <path fill={color} d="M23 0H9C4 0 0 4 0 9v14c0 5 4 9 9 9h14c5 0 9-4 9-9V9c0-5-4-9-9-9zM12 25c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v12zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm17 14c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-6.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V25c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h4c.3 0 .5.1.7.3.6-.2 1.2-.3 1.8-.3 3 0 5.5 2.5 5.5 5.5V25z" />
    </svg>
)
export default SvgLinkedIcon
