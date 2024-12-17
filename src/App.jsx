import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Midudev"
        name="Miguel Ángle Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Juansebt"
        name="Juan Sebastián Laguna"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="AndresF122"
        name="Andrés Felipe Quintero"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="JuanDavidChimbaco "
        name="Juan David Chimbaco"
      />
    </section>
  );
}
