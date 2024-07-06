import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchMemories } from "../http"

export default function MemoriesPage() {
    const { isFetching, fetchedData, error, setFetchedData } = useFetch(fetchMemories);

    return (
        <>
            <h1>Memories</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Type</th>
                        <th>Source</th>
                    </tr>
                </thead>
                {fetchedData && <tbody>
                    {fetchedData.map(item => <tr key={item.id}>
                        <td>
                            <NavLink to={`/memories/${item.id}`}>{item.id}</NavLink>
                        </td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td>{item.memoryType}</td>
                        <td>{item.source}</td>
                    </tr>)}
                </tbody>}
            </table>
        </>
    );
}
