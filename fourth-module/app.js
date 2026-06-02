"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData(endpoint) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        const result = error;
        throw new Error(result.message);
    }
}
async function getUsers() {
    const users = await fetchData('users');
    users.forEach((c) => console.log(`${c.id}. ${c.username}`));
}
async function getPosts() {
    const posts = await fetchData('posts');
    posts.forEach(c => console.log(`${c.id}. ${c.title}`));
}
getUsers();
getPosts();
//# sourceMappingURL=app.js.map