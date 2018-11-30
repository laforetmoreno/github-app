// import { urls } from './config/urls';

const urlUser = 'https://api.github.com/users/morenopereira';

// const newElement = document.createElement('p');
// const value = document.createTextNode(data.url);

// newElement.appendChild(value);

// const jj = document.getElementById('teste');

// jj.appendChild(newElement);

const user = {
  async getUser() {
    const res = await fetch(urlUser);
    // const json = await res.json();

    return res.json();
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data, 'dadas')
      // })
  }
}

export default user;
