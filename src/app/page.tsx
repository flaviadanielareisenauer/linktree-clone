import api from "@/api";

export default async function Home() {
  const links = await api.links.fetch();

  return (
    <main>
      <h1>Daniela</h1>
      <ul>
        {links.map((link) => (
          <li key={link.URL}>
            <a href={link.URL}>{link.Label}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}