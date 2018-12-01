function renderCard(data) {
  const container = document.getElementById('challenge');
  const html = `
      <div class="photo-container">
        <img class="photo" src="${data.avatar_url}" alt="" />
        <a class="link" href="${data.html_url}" target="_blank">visitar o perfil</a>
      </div>
      <div class="github-infos">
        <h3>Repositorios: ${data.public_repos}</h3>
        <h3>Seguidores: ${data.followers}</h3>
        <h3>Seguindo: ${data.following}</h3>
      </div>
  `;
  
  container.insertAdjacentHTML('beforeend', `<div class="user-card">${html}</div>`)
}

export default renderCard;