export function Chart({ data }) {
    console.log(data)
    return (
        <ul className='chart'>
            {data.map(item => (
                <li key={item.cat}>
                    <span title={item.cat} style={{ height: item.value + '%' }}>
                        {item.value + '%'}
                    </span>
                </li>
            ))}
        </ul>
    )
}
