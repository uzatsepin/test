const link = 'https://uadata.net/ukraine-russia-war-2022/people.json'

async function fetchData() {
    try {
        const response = await fetch(link)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log(data.data[data.data.length - 1])
        console.log(data.data[data.data.length - 2])
    } catch (error) {
        console.error('Fetch error:', error)
    }
}

// Call the fetchData function
fetchData()
