import GitHub from '@mui/icons-material/GitHub';
import X from '@mui/icons-material/X';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Icon from '@mui/material/Icon';

function NavIcon({ component, link }) {
  return (
    <a href={link} target='_blank'>
      <Icon component={component} fontSize='large' htmlColor='#f8eee7' />
    </a>
  )
}

function Header() {
  const myGithub = "https://github.com/Mshra/shortify-frontend";
  const myTwitter = "https://x.com/callmeaaryan";
  const myLinkedIn = "https://www.linkedin.com/in/callmeaaryan/"

  return (
    <header className='header'>
      <h1>Shortify</h1>

      <nav className='icons'>
        <NavIcon component={GitHub} link={myGithub} />
        <NavIcon component={X} link={myTwitter} />
        <NavIcon component={LinkedIn} link={myLinkedIn} />
      </nav>
    </header>
  )
}

export default Header;
