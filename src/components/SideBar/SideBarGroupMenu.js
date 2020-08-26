import React from 'react'
import { ChevronUp, ChevronDown } from 'tabler-icons-react'

export default function SideBarGroupMenu({ title, open, children, toggle, name, ...props }) {
    return (
        <li className="nav-item" {...props}>
            <a className="nav-link collapsed cursor-pointer" name={name} onClick={(e) => toggle(e)}>
                {title}
                {open ?
                    <ChevronUp className="collapse-icon" size={25}
                        strokeWidth={1.5}
                        color={'#FFFF'} />
                    :
                    <ChevronDown className="collapse-icon" size={25}
                        strokeWidth={1.5}
                        color={'#FFFF'} />
                }
            </a>
            <div className={"collapse".concat(open ? " show" : "")}>
                <div className="bg-white py-2 collapse-inner rounded">
                    {children}
                </div>
            </div>
        </li>

    )
}
