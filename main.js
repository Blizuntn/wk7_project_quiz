let questionEl = document.getElementById("question");
let buttonEl = document.getElementById("button");
let url = "https://opentdb.com/api.php?amount=10&category=21&type=boolean";
fetch(url)
  .then((res) => res.json())
  .then((data) => displayQuestion(data));

function displayQuestion(data) {
  console.log(data["results"]);
  let questions = data["results"];

  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let answer = questions[i]["correct_answer"];
    let formEl = document.getElementById("questionForm");
    let questionHTML = `
    <form id="questionForm">
  <div class="form-group border rounded border-dark p-5">
    <label class="mb-4" for="question"><h4><strong>Question ${
      i + 1
    }</strong></h4></label>
    <p>${questions[i]["question"]}</p>
    <input type="text" class="form-control" id="answerInput" placeholder="True or False">
    </div>
</form>
<button type="submit" class="mt-2 mb-2 btn btn-primary btn-block">
Submit
</button>


    `;
    questionEl.innerHTML += questionHTML;
  }
}
