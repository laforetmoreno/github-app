import { getUserData, getRepos, getSubscriptions } from './services/services';
import { renderListTemplate, renderCard } from './view/view';

import './styles/main.scss';

const p = document.getElementById('titleInfos');

const makeCard = async () => {
  const results = await getUserData();

  renderCard(results)
}

const makeReposContainer = async () => {
  p.textContent = 'Repositórios';
  const results = await getRepos();
  
  renderListTemplate(results);
}

const makeSubscriptionsContainer = async () => {
  p.textContent = 'Repositórios favoritos';
  const results = await getSubscriptions();

  renderListTemplate(results);
}

window.addEventListener("load", makeCard(), makeReposContainer());
document.getElementById("ctaRepos").addEventListener("click", makeReposContainer);
document.getElementById("ctaSubscriptions").addEventListener("click", makeSubscriptionsContainer);