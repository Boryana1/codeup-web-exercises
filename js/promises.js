const YOUR_TOKEN_HERE = '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';
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a GitHub username, and returns a promise that resolves
// returning just the date of the last commit that user made. Reference the github api documentation
// to achieve this.
//
// const token = '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';
// fetch('https://api.github.com/user/repos', {
//     headers: {
//         Authorization: `token ${token}`
//     }
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .then(json => console.log(json.commits_url))

function wait(time) {
    return new Promise((resolve, reject) => {
        if (!isNaN(time)) {
            setTimeout(() => {
                resolve();
            }, time)
        } else {
            reject('Did not work');
        }
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function getLastCommitDate(user) {
    const myPromise = fetch(`https://api.github.com/users/${user}/events/public`, {headers: {'Authorization': `token ${token}`}});
    myPromise.then(response => {
        response.json().then(event => {
            let box = [];
            box[0].created_at = 0;
            event.forEach(function(what){
                if (what.type === 'PushEvent'){
                    box.push(what);
                }
            });
            console.log(`Last Commit Was: ${box[0].created_at}`);
        })
    });
}

getLastCommitDate('Boryana1');
//