interface IUser {
    id: number
    name: string
    username: string
    email: string
}

interface IPosts{
    userId: number
    id: number
    title: string
    body: string
}

async function fetchData<T>(endpoint:string): Promise<T> {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }

        const data: T = await response.json()
        return data
    } catch (error) {
        const result = error as Error
        throw new Error(result.message)
    }

}

async function getUsers() {
    const users = await fetchData<IUser[]>('users')
    users.forEach((c) => console.log(`${c.id}. ${c.username}`))
}

async function getPosts() {
    const posts = await fetchData<IPosts[]>('posts')
    posts.forEach(c=> console.log(`${c.id}. ${c.title}`))
}

getUsers()
getPosts()
