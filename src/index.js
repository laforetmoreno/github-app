import user from './services/services';
import './styles/main.scss';

async function renderSeguidores() {
  const data = await user.getUser();
  console.log(data);

  const newElement = document.createElement('p');
  const value = document.createTextNode(`Seguidores ${data.followers}`);

  newElement.appendChild(value);

  const jj = document.getElementById('teste');

  jj.appendChild(newElement);
}
// async function nata() {
//   const data = await nada();

//   const newElement = document.createElement('p');
//   const value = document.createTextNode(data.url);

//   newElement.appendChild(value);

//   const jj = document.getElementById('teste');

//   jj.appendChild(newElement);

//   // console.log(data.url)
// }

renderSeguidores()
// const data = user.getUser();
// console.log(user.getUser(), 'ta foda')