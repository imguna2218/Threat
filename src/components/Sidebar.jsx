import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import security from "../assets/security.png"; // Ensure correct path for image assets
import { FaTools } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaMandalorian } from "react-icons/fa6";
export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true); 
  const navigate = useNavigate(); 

  const data = [
    { name: "Our Tool", icon: <FaTools />, route: "/our-tool" },
    { name: "AI Chat", icon: <FaBrain />, route: "/ai-chat" },
    { name: "Manual Test", icon: <FaMandalorian />, route: "/manual-test" },
    { name: "LogOut", icon: <IoIosLogOut />, route: "/logout" },
  ];

  const handleNavigation = (route, index) => {
    setSelected(index); 
    navigate(route); 
  };

  return (
    <Aside className={`flex column j-between ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <div className="brand flex a-center j-center gap">
          <span className="font-bold">TrueSecure.</span>
        </div>
      )}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⮜" : "⮟"}
      </button>
      <div className="links flex a-center j-center">
        <ul className="flex column gap">
          {data.map(({ name, icon, route }, index) => (
            <li
              className={`flex gap a-center ${selected === index ? "selected" : ""}`}
              onClick={() => handleNavigation(route, index)}
              key={name}
            >
              <span>{icon}</span>
              {isOpen && <span>{name}</span>}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <PrivacySection className="b-rad-1 flex a-center j-center column gap">
          <img src={security} alt="Security" />
          <h3>Keep you safe!</h3>
          <h5>Update your security password, keep your account safe!</h5>
          <h4>Update Privacy</h4>
        </PrivacySection>
      )}
    </Aside>
  );
}

// Styled components for the sidebar
const Aside = styled.aside`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 15vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  background-color: var(--bg-color);
  padding: 2rem 1rem;
  transition: width 0.3s ease;

  &.closed {
    width: 4rem; 
  }

  .toggle-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .brand {
    span {
      font-size: 1.4rem;
    }
  }

  .links {
    ul {
      li {
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
      .selected {
        color: var(--primary-color);
      }
    }
  }

  .privacy {
    gap: 0.6rem;
    text-align: center;
    background-color: var(--primary-color);
    padding: 1rem;

    h3,
    h4 {
      color: white;
      letter-spacing: 0.03rem;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 20vw; 
    }
`;

const PrivacySection = styled.div`
  gap: 0.6rem;
  text-align: center;
  background-color: var(--primary-color);
  padding: 1rem;

  h3,
  h4 {
    color: white;
    letter-spacing: 0.03rem;
  }

  img {
    max-width: 80%; // Ensure the image fits well in the section
    height: auto;
  }
`;
