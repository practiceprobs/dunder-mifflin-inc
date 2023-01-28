import Link from "next/link";
import { notFound } from 'next/navigation';

async function getTeam() {
    const res = await fetch('https://fetch-data--dundermifflininc.netlify.app/.netlify/functions/team');
    if (!res.ok) return undefined;
    return res.json();
}

export default async function Home() {

    const team = await getTeam();

    if (!team) {
        notFound();
    }

    return (
        <div>
            <h1>Meet the team</h1>
            <ul>
                {
                    team.map(t => (
                        <li key={ t.id }>
                            <Link href={ `/team/${ t.id }/` }>{ t.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}