import { notFound } from "next/navigation";

export default async function Param({ params }) {
    const { id } = await params;

    if (id !== '12345') {
        notFound();
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-4xl font-bold">Accessing the Url: {id}</h1>
            <p className="text-2xl font-bold"> This is a dynamic route</p>
        </div>
    );
}