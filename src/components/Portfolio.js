function Portfolio() {
  let projects = [
    {
    "name": "Dresser",
    "synopsis": "Weather-based outfit planning app",
    "image": "",
    "walkthroughURL": "Walkthrough coming soon",
    "repoURL": "",
    "details": "React.js front-end utilising SQLite backend on Ruby on Rails"
    },
    {
      "name": "Genre Obscura",
      "synopsis": "Early-internet nostalgic music bulletin board",
      "image": "",
      "walkthroughURL": `<iframe width="560" height="315" src="https://www.youtube.com/embed/Sfcj18rGYSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      "repoURL": "",
      "details": "Vanilla Javascript with CSS styling"
      },
    {
      "name": "",
      "synopsis": "",
      "image": "",
      "walkthroughURL": "",
      "repoURL": "",
      "details": ""
    }
  ]
  console.log("Projects data", projects)

  return(
    <div class="project-body">
      {projects.map((e) => {
        return(
        <div class="project-box">
        <h2>{e.name}</h2>
        </div>
      )} 
      )}
    </div>
  )  
}

export default Portfolio;