import { ClientsPage, Title, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <Title>Clients page</Title>
      <StyledLink to="amazon">Amazon page</StyledLink>
      <StyledLink to="facebook">Facebook page</StyledLink>
      <StyledLink to="google">Google page</StyledLink>
    </ClientsPage>
  );
}

export default Clients;
