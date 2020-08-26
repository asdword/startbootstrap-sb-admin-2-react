import React from 'react'
import SideBarMenuItem from '../components/SideBar/SideBarMenuItem'
import SideBarBrand from '../components/SideBar/SideBarBrand';
import SideBarDevider from '../components/SideBar/SideBarDevider';
import SideBarHeading from '../components/SideBar/SideBarHeading';
import SideBarGroupMenu from '../components/SideBar/SideBarGroupMenu';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';

export default class SideBar extends React.Component {
    state = { sideBarToggled: false, showMenuApp: false }
    toggleMenu = (e) => {
        //e.preventDefault();
        //e.stopPropagation();
        const name = e.target.name;
        this.setState({ [name]: !this.state[name] });
    }

    toggleSideBar = () => {
        document.body.classList.toggle("sidebar-toggled");
        this.setState({ sideBarToggled: !this.state.sideBarToggled })
    }

    render() {
        const { showMenuApp, sideBarToggled } = this.state;
        return (
            <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ".concat(sideBarToggled ? "toggled" : "")} id="accordionSidebar">

                <SideBarBrand
                    lable="Admin Panel"
                    icon={<sub>v2</sub>} />

                <SideBarDevider className="m-0" />

                <SideBarMenuItem
                    title="Dashboard" />

                <SideBarDevider />

                <SideBarHeading
                    title="Interface" />

                <SideBarGroupMenu
                    title="Test Root"
                    open={showMenuApp}
                    name="showMenuApp"
                    toggle={this.toggleMenu}>
                    <h6 className="collapse-header">Custom Components:</h6>
                    <a className="collapse-item" href="buttons.html">Buttons</a>
                    <a className="collapse-item" href="cards.html">Cards</a>
                </SideBarGroupMenu>

                <SideBarDevider className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" onClick={this.toggleSideBar} id="sidebarToggle">
                        {sideBarToggled ?
                            <ChevronRight size={25}
                                strokeWidth={1.5}
                                color={'#FFFF'} /> :
                            <ChevronLeft size={25}
                                strokeWidth={1.5}
                                color={'#FFFF'} />
                        }
                    </button>
                </div>

            </ul>
        )
    }
}
