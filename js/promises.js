const YOUR_TOKEN_HERE = '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';
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a GitHub username, and returns a promise that resolves
// returning just the date of the last commit that user made. Reference the github api documentation
// to achieve this.
//
const token = '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';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
})
    .then(res => res.json())
    .then(json => console.log(json))
    .then(json => console.log(json.commits_url))