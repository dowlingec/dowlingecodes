function Portfolio() {
  let projects = [
    {
    "name": "Dresser",
    "synopsis": "Weather-based outfit planning app",
    "image": "",
    "walkthroughURL": "Walkthrough coming soon",
    "repoURL": "https://github.com/dowlingec/dresser",
    "details": "React.js front-end utilising SQLite backend on Ruby on Rails"
    },
    {
      "name": "Genre Obscura",
      "synopsis": "Early-internet nostalgic music bulletin board",
      "image": "",
      "walkthroughURL": `<iframe width="560" height="315" src="https://www.youtube.com/embed/Sfcj18rGYSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      "repoURL": "https://github.com/dowlingec/genreObscura",
      "details": "Vanilla Javascript with CSS styling"
      },
    {
      "name": "Flatiron Times",
      "synopsis": "News hub collab with Justin Chazen",
      "image": "",
      "walkthroughURL": "",
      "repoURL": "",
      "details": "https://github.com/dowlingec/flatiron-times"
    }
  ]
  console.log("Projects data", projects)

  return(
    <div class="project-body">
      {projects.map((e) => {
        return(
        <div class="project-box">
        <h2>{e.name}</h2>
        <p class="projects-p">{e.synopsis}</p>
        <p class="projects-p">{e.details}</p>
        <a href={e.repoURL}>View on GitHub</a>
        <a href={e.walkthroughURL}>Watch Walktrhough</a>
        </div>
      )} 
      )}
    </div>
  )  
}

export default Portfolio;