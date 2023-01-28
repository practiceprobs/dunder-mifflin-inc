import { notFound } from 'next/navigation';

async function getEmployee(id) {
    const res = await fetch('https://dundermifflininc.netlify.app/.netlify/functions/team?id=' + id);
    if (!res.ok) return undefined;
    return res.json();
}

export default async function Employee({ params }) {

    const employee = await getEmployee(params.id);

    if (!employee) {
        notFound();
    }

    return (
        <div>
            <h1>{ employee.name }</h1>
            <h3>{ employee.title }</h3>
        </div>
    );
}