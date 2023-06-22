import { DarkThemeToggle, Navbar, Avatar } from 'flowbite-react';
import Logo from './Logo';

export default function MyNavbar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="#">
        <Logo className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TanktopTaro
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle />
      <Avatar alt="User settings" img="https://res.cloudinary.com/delgya5vj/image/upload/c_fill,g_face,w_300,h_300,r_max/v1687393571/doggos/My_project_2_zhawj7.png" rounded/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About Me
        </Navbar.Link>
        <Navbar.Link href="#">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact Me
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


