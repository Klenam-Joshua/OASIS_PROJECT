import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog8Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const List = styled.li`
  padding-inline: 1.4rem;
  list-style: none;
  margin-top: 1rem;
`;

const StyledNavBar = styled.nav`
  margin-top: 4rem;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.7rem 0 0.7rem 2rem;
  border-radius: 7px;
  font-weight: bold;
  width: 100%;
  gap: 1rem;
  align-items: center;
  display: flex;
  &.active {
    background: var(--color-grey-100);
  }
`;

const routes = [
  {
    name: "Home",
    route: "/",
    icon: <HiOutlineHome />,
  },
  {
    name: "Bookings",
    route: "/bookings ",
    icon: <HiOutlineCalendarDays />,
  },
  {
    name: "Cabins",
    route: "/cabins",
    icon: <HiOutlineHomeModern />,
  },
  // {
  //   name: "Account",
  //   route: "/account",
  //   icon: <HiOutlineCog8Tooth />,
  // },
  // {
  //   name: "Users",
  //   route: "/users",
  // },
  {
    name: "Settings",
    route: "/settings",
    icon: <HiOutlineCog8Tooth />,
  },
];

function Navbar() {
  return (
    <StyledNavBar>
      <ul>
        {routes.map((route, index) => (
          <List key={index}>
            <StyledNavLink to={route.route}>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "0.2rem",
                  fontSize: "2rem",
                }}
              >
                {" "}
                {route.icon}{" "}
              </span>
              <span> {route.name}</span>
            </StyledNavLink>
          </List>
        ))}
      </ul>
    </StyledNavBar>
  );
}

export default Navbar;
