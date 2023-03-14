const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source:
            "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "society",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];


const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// TODO: SELECTOR
const shareBtn = document.getElementById("shareBtn")
const form = document.getElementById('fact-form')
const factsList = document.getElementById('fact-lists')


// TODO: CALLBACK FUNCTIONS
// Empty all the fact by default
factsList.innerHTML = "";

// Opening and closing button of form
const openCloseForm = () => {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        shareBtn.textContent = "close";
    }
    else {
        form.classList.add('hidden');
        shareBtn.textContent = "share a fact";
    }
}



// Load data from supabase
async function loadFacts() {
    const res = await fetch("https://rygbqrkkcayzmsfnwnrt.supabase.co/rest/v1/facts", {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z2JxcmtrY2F5em1zZm53bnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NDQ2MTYsImV4cCI6MTk5NDAyMDYxNn0.Vdbq1WBD4TZBBmRiifBzjoorQXR9fbSMXWUbgG60E4w",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z2JxcmtrY2F5em1zZm53bnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NDQ2MTYsImV4cCI6MTk5NDAyMDYxNn0.Vdbq1WBD4TZBBmRiifBzjoorQXR9fbSMXWUbgG60E4w",
        }
    })
    const data = await res.json();
    createFactsList(data)
}
loadFacts()



// Create Facts List
const createFactsList = (dataArr) => {
    const listsArray = dataArr.map((fact) => 
    `<li class="fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >
        (Source)</a
      >
    </p>
    <span class="tag" style="background-color:${CATEGORIES.find((cat) => cat.name === fact.category).color}">#${fact.category}#</span>
    <div class="vote-buttons">
      <button>👍🏻 ${fact.votesInteresting}</button>
      <button>🤯 ${fact.votesMindblowing}</button>
      <button>❌ ${fact.votesFalse}</button>
    </div>
  </li>`
    )

    const listsHtml = listsArray.join("");
    factsList.insertAdjacentHTML("afterbegin", listsHtml);
}





// TODO: EVENTS
shareBtn.addEventListener('click', openCloseForm);