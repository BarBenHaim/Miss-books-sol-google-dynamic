const { useEffect, useState } = React
import { Chart } from '../cmps/Chart.jsx'
import { booksService } from '../services/books.service.js'

export function Dashboard() {
    const [books, setBooks] = useState([])
    const [catsStats, setCatsStats] = useState([])

    useEffect(() => {
        booksService.query().then(setBooks)
        booksService.getCatsStats().then(setCatsStats)
    }, [])

    return (
        <section className='dashboard'>
            <h1>Dashboard</h1>
            <h2>Statistics for {books.length} Books</h2>
            <h4>By Category</h4>
            <Chart data={catsStats} />
        </section>
    )
}
