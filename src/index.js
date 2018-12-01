import url from './config/urls';
import renderListTemplate from './view/renderListTemplate';
import renderCard from './view/renderCard';
import request from './services/request';

import './styles/main.scss';

const makeCard = async () => {
  const results = await request(url.user);

  renderCard(results)
}

const makeReposContainer = async () => {
  const results = await request(url.repos)
  
  renderListTemplate(results);
}

const makeSubscriptionsContainer = async () => {
  const results = await request(url.subscriptions)
  
  renderListTemplate(results);
}

window.addEventListener("load", makeCard(), makeReposContainer());
document.getElementById("ctaRepos").addEventListener("click", makeReposContainer);
document.getElementById("ctaSubscriptions").addEventListener("click", makeSubscriptionsContainer);