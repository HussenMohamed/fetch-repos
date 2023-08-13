# fetch-repos

The **fetch-repos** web application allows users to input their GitHub username and retrieve information about the repositories they have uploaded to their GitHub account. The application fetches repository data from the GitHub API and displays relevant information such as repository names, stars, and a "Visit" link to the repository.

## Live Demo
https://hussenmohamed.github.io/fetch-repos/

## Features

- Input your GitHub username to fetch repository information.
- Display repository names, star counts, and links to the repositories.
- Handle error cases, such as empty username or non-existing users.

## JavaScript Concepts

### Event Handling

The project utilizes event handling to trigger the process of fetching and displaying repository data when the "Get Repos" button is clicked.

```javascript
getButton.onclick = function() {
    // Empty the container
    reposData.innerHTML = '';

    getRepos();
```
### Asynchronous Functions and Fetch API

The `getRepos` function fetches repository data using the Fetch API and handles asynchronous operations.

```javascript
async function FetchData(link) {
    const response = await fetch(link);
    if (response.status === 404) {
        displayAlert("Username Not Found");
        return;
    }
    const repos = await response.json();

    // Process repository data and display it in the UI
    // ...
}
```

### DOM Manipulation

The `FetchData` function processes the fetched repository data and dynamically creates HTML elements to display each repository's information on the page.

```javascript
repos.forEach(repo => {
    // Create elements for repo name, "Visit" link, and star count
    // ...
    
    // Append elements to the main div and display it on the page
    // ...
});
```

### Error Handling and Alerts

The application handles errors and displays alert messages to the user using the `displayAlert` function.

```javascript
function displayAlert(text) {
    alertParagraph.textContent = text;
    alertBox.classList.remove("hidden");
    setTimeout(() => {
        alertBox.classList.add("hidden");
    }, 1500);
}
```
## Usage
1. Open the index.html file in a web browser.
1. Input your GitHub username in the provided field.
1. Click the "Get Repos" button to retrieve your repository information.

}
