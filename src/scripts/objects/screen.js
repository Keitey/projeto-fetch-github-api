const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                            <img src="${
                              user.avatarUrl
                            }" alt="Foto do perfil do usuário" />
                            <div class="data"
                                <h1>${
                                  user.name ??
                                  "Usuário(a) não possuí nome cadastrado 😭"
                                }</h1>
                                <p>${
                                  user.bio ??
                                  "Usuário(a) não possui bio cadastrada 😭"
                                }</p>
                            </div>

                            <div class="follow">
                            <div>
                                <p>👥 Seguidores</p>
                                <h3>${
                                  user.followers ??
                                  "Usuário(a) não possui seguidores 😭"
                                }</h3>
                            </div>
                            <div>
                                <p>👥 Seguindo</p>
                                <h3 class="following">${
                                  user.following ??
                                  "Usuário(a) não segue ninguém 😭"
                                }</h3>  
                            </div>
                            </div>
                        </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `
                                <li>
                                <a href= "${repo.html_url}" target= "_blank">${repo.name}
                                <ul>
                                    <li class="repositories-details">🍴${repo.forks_count}</li>
                                    <li class="repositories-details">⭐${repo.stargazers_count}</li>
                                    <li class="repositories-details">👀${repo.watchers_count}</li>
                                    <li class="repositories-details">💻${repo.language}</li>
                                </ul>
                                </a>
                                </li>`)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                            <hr>
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                          </div>`;
    }

    let userActivity = "";
    user.activities.forEach((activity) => {
      userActivity += `<li>
                                <p><a style="font-weight: bold;">${activity.repo.name}</a>: ${activity.type}</p>
                            </li>`;
    });

    if (userActivity.length > 0) {
      this.userProfile.innerHTML += `<div class="activities section">
                                                <hr>
                                                <h2>Atividades</h2>
                                                <ul>${userActivity}</ul>
                                          </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};

export { screen };
