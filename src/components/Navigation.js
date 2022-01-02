import React from 'react';

function Navigation({ children }) {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                { children }
            </ul>
        </nav>
    );
}

export default Navigation;
