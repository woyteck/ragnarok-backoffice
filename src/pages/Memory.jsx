import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { fetchMemory } from "../http";
import MemoryFragment from "../components/MemoryFragment";

export default function MemoryPage() {
    const params = useParams();

    const { isFetching, fetchedData, error, setFetchedData } = useFetch(() => fetchMemory(params.memoryId), []);

    if (isFetching) {
        return <p>Fetching data...</p>
    }

    return (
        <>
            <h1>Memory {params.memoryId}</h1>
            {fetchedData && <div>
                <p>Source: {fetchedData.source}</p>
                <p>Type: {fetchedData.memoryType}</p>
                <div>Created at: {fetchedData.createdAt}</div>
                <div>Updated at: {fetchedData.updatedAt}</div>
                {fetchedData.fragments && <ul>
                    {fetchedData.fragments.map(fragment => <MemoryFragment key={fragment.id} fragment={fragment}></MemoryFragment>)}
                </ul>}
            </div>}
        </>
    );
}
