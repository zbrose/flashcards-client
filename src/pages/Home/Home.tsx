import { NavLink } from "react-router";

export default function Home() {
  // display decks
  // navigate to deck or card input forms

  return (
    <section>
      <NavLink to="/create">Create New Deck</NavLink>
      <NavLink to="/create">Add New Card</NavLink>
    </section>
  );
}
