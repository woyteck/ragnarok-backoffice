import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL, fetchMemory } from "../http";
import { useEffect, useState } from "react";

export default function MemoryPage() {
    const params = useParams();
    const [fetchedData, setFetchedData] = useState({});

    useEffect( async () => {
        async function fetchMemory(id) {
            const response = await fetch(`${BASE_URL}/memories/${id}`);
            const resData = await response.json();
          
            if (!response.ok) {
              throw new Error('Failed to fetch places');
            }

            return resData.memories;
        }

        const data = await fetchMemory(params.memoryId);
        // setFetchedData(data);
    }, []);

    // const { isFetching, fetchedData, error, setFetchedData } = useFetch(() => fetchMemory(params.memoryId), []);
    // console.log(fetchedData);

    return (
        <>
            <h1>Memory {params.memoryId}</h1>
            {fetchedData && <div>
                <p>{fetchedData.source}</p>
            </div>}
        </>
    );
}
