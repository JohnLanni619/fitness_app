import useSWR from 'swr'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d4f277aa3msha3110580eaa86b7p12632ejsn334b93f0e599',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

const fetcher = (...args) => fetch(...args, options).then((res) => res.json())

export default function Template({searchText}) {
    const { data, error } = useSWR(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${searchText}`, fetcher, {
        onSuccess: data => {
            console.log(data.hints)
        },
        onError: error => {
            console.error(error)
        }
    })

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    if (searchText.trim().length > 0) {
        return (
            <>
                {data.hints.map((food, index) => {
                    return (
                        <div data-index={ food.food.foodId + index } 
                            key={ food.food.foodId + index }
                        >
                            <h1>{ food.food.category }</h1>
                            <p> { food.food.label }</p>
                        </div>
                    )
                })}
            </>
        )
    } else {
        return (
            <h1>Enter a food in the search bar to get started!</h1>
        )
    }

}