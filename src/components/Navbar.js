import { StyledHeader, Image } from './styles/Header.styled'

function Navbar() {
  return (
    <StyledHeader>
        <nav>
            <Image src="./images/logo_landscape.png" alt="" />
        </nav>
    </StyledHeader>
  )
}

export default Navbar