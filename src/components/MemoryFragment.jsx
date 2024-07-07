export default function MemoryFragment({ fragment, ...props }) {
    return (
        <li {...props}>{fragment.contentRefined}</li>
    );
}
