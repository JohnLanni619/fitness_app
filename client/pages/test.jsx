import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Test() {
    const { data, error } = useSWR('/api/test', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            {data.map(data => {
                return (
                    <div key={ data.id }>
                        <h1>{ data.id }</h1>
                        <p> { data.description }</p>
                    </div>
                )
            })}
            <h1>Test</h1>
        </div>
    )
}