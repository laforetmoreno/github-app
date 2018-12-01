function renderListTemplate(data) {
  const infos = document.getElementById("infos");
  const html = `
    <ul class="list">
      ${data.reduce((html, items) => html + `<li class="item">${items.name}</li>`, '')}
    </ul>
`;

infos.innerHTML = html;
}

export default renderListTemplate;