import { Container, Header, HeaderAuthenticated, Stack, Nav } from "@/src/components";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {

    return (
      <Stack className="min-h-screen bg-neutral-100">
        <Header>
          <HeaderAuthenticated />
        </Header>
          <Nav>
            <Container>
              {children}
            </Container>
          </Nav>
      </Stack>
    );
}
