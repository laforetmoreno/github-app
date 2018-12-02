const request = async url => {
  try {
    const res = await fetch(url);
    
    return res.json();
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

export default request;
