import { StyledHeader, Nav, Logo, Image } from "./styles/Headers.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              provident est quisquam ut at qui eligendi labore maiores quam
              magni aperiam autem eaque id harum enim, consectetur fugiat
              inventore sit.
            </p>

            <Button bg="#FF0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="/images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}