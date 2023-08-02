// Main Variables
const theInput = document.querySelector(".get-repos input");
const getButton = document.querySelector(".get-repos .get-button");
const reposData = document.querySelector(".show-data");
const alertBox = document.querySelector(".alert");
const alertParagraph = document.querySelector(".alert p");

getButton.onclick = function() {
    // Empty the container
    reposData.innerHTML = '';

    getRepos();
}

// Get Repos Function
function getRepos(){
    console.log("Function Get Repos");
    if (theInput.value == ""){ // if value is empty
        displayAlert("Username cannot be empty");
    } else {
        FetchData(`https://api.github.com/users/${theInput.value}/repos`);
    }

}
// Display Alert Function
function displayAlert(text){
    alertParagraph.textContent = text;
    alertBox.classList.remove("hidden");
    setTimeout(() => {
        alertBox.classList.add("hidden");
    }, 1500);
}
// Fetch Data function 
async function FetchData(link){
    const response = await fetch(link);
    if(response.status === 404){
        displayAlert("Username Not Found");
        return;
    }
    const repos = await response.json();
    
    // Loop on the repos            
    repos.forEach(repo => {
        // Create The Main Div
        const mainDiv = document.createElement("div");
        // Create the heading that contains the repo name
        const repoHeading = document.createElement("h3");
        // Add the Repo Name
        const repoName = document.createTextNode(repo.name);
        repoHeading.appendChild(repoName);
        mainDiv.appendChild(repoHeading);
        //Create repo URL
        const URL = document.createElement("a");
        //Create Repo URL Text
        const URLText = document.createTextNode("Visit");
        URL.appendChild(URLText);
        //Add the "href"
        URL.href = `${link}/${repo.name}`;
        // Set attribute blank
        URL.setAttribute("target","_blank");
        //Append the URL to the main div
        mainDiv.appendChild(URL);
        //Create the Stars Span
        const starsSpan = document.createElement("span");
        //Create the stars Text
        const starsText = document.createTextNode(`Stars: ${repo.stargazers_count}`);
        starsSpan.appendChild(starsText);
        // Append the stars span to the main div
        mainDiv.appendChild(starsSpan);
        // Add class on main div
        mainDiv.className = "repo-box";
        // Append the div to the repos data or the container in the page
        reposData.appendChild(mainDiv);
    });
}