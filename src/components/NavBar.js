import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const NavBar = () => {
  return (
    <div>
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */ }
          <Link to='/' className="">
            <img src={logo} alt="logo" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to='/' className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to='/cart' className="ml-auto">
            <ButtonContainer>
              <span>
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
      </NavWrapper>
    </div>
  )
};

const NavWrapper = styled.nav`
  background:var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default NavBar;

        
        