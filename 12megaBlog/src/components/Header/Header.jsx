import React from 'react';
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function Header() {
  
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name:"Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name:"Signup",
      slug: "/signup",
      active: !authStatus 
    },
    {
      name:"All Post",
      slug: "/all-post",
      active: authStatus
    },
    {
      name:"Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]
  
  return (
    <Header className='py-3 shadow bg-gray-500' >
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to = '/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
            ):null
            )}
            {authStatus && (
              <Li>
                <LogoutBtn />
              </Li>
            )} 
          </ul>
        </nav>
      </Container>
    </Header>
  );
}
//{authStatus && ()} very commmon syntax stating if the authStatus is true then display ()