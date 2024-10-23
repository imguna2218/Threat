import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import avatar from "../assets/avatar.jpeg";
import bell from "../assets/bell.png";
import {User} from 'lucide-react'
export default function Navbar() {
  return (
    <Nav className="flex justify-end">

      <div className="profile flex a-center gap">
        <div className="notification">
          <img src={bell} alt="Bell" />
        </div>
        <User className="avatar" width="40" height="40"/>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .user {
    span {
      color: var(--primary-text);
    }
  }
  .search-container {
    background-color: var(--bg-color);
    color: var(--light-text);
    padding: 0 2rem;
    input {
      border: none;
      width: 20rem;
      font-size: 1.1rem;
      &::placeholder {
        color: var(--light-text);
        text-transform: capitalize;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .profile {
    .notification {
      padding: 1rem;
      background-color: var(--bg-color);
      border-radius: 0.5rem;
    }
  }
`;
