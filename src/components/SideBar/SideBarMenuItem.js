import React from 'react'

export default function SideBarMenuItem({ title, icon = null, name, ...props }) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="index.html" name={name} {...props}>
                {/* {icon} */}
                <span>{title}</span></a>
        </li>
    )
}
