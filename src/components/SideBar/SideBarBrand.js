import React from 'react'

export default function SideBarBrand({ lable, icon }) {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                {icon}
            </div>
            <div className="sidebar-brand-text mx-3">{lable}</div>
        </a>
    )
}
