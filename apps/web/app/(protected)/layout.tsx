import { Container, Grid, Stack, Nav } from "@/src/components";

//import { HeaderAuthenticated } from "@/components/ui/surfaces/header";
import { Header } from "./dashboard/_components/header";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {

    return (
      <Stack className="min-h-screen bg-neutral-100">
        <Header>
            <div></div>
          {/* <HeaderAuthenticated /> */}
        </Header>
          <Nav>
          <Container>
            {children}
          </Container>
          </Nav>
      </Stack>
    );
}
