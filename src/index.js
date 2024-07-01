function getProjects() {
  const urlGitHub = "https://api.github.com/users/georgearison22/repos";
  var loadingElement = document.getElementById("loading");

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      loadingElement.style.display = "none";
      console.log(response);
      showProjects(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

function showProjects(data) {
  var listElement = document.getElementById("myProjectsList");

  for (let i = 0; i < data.length; i++) {
    let a = document.createElement("a");
    a.href = data[i]["clone_url"];
    a.target = "_blank";
    a.title = data[i]["description"];
    let linkText = document.createTextNode(data[i]["name"]);
    a.appendChild(linkText);
    listElement.appendChild(a);
  }
}

getProjects();

const botao = document.querySelector(".backToTop");

window.addEventListener("scroll", function (event) {
  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  } else {
    botao.classList.add("visible");
  }
});
