import Papa from "papaparse";

type Link = {
  Label: string;
  URL: string;
};

async function getLinks() {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuFZX977G0jfI4O5kWLM2_tcpUGi6nEUMQJ2CIFrNHHMoCD-ICIUeFKAttyhCNzeUxOyXXFrNSf0RH/pub?gid=0&output=csv"
  );
  const data = await res.text();

  const parsed = await new Promise<Link[]>((resolve, rejects) => {
    Papa.parse<Link>(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: rejects,
    });
  });

  return parsed;
}

export default async function Home() {
  const links = await getLinks();

  console.log(links);

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