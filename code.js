let ssearchInputEl = document.getElementById("searchInput");

ssearchInputEl.addEventListener("keydown", searchwikipedia);

function displaySearchResults(searchResults) {

}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        let searchInputValue = ssearchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                let {
                    search_results
                } = json;
                displaySearchResults(search_results);
                console.log(json);
            })
        console.log(searchInputValue);
    }
}
