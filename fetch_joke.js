const fetch_url = "https://api.icndb.com/jokes/random?limitTo=[nerdy]"

const getJoke = async () => {
    try {
      const response = await fetch(fetch_url)
      const obj = await response.json()
      console.log(`FETCHED. Response JSON`, JSON.stringify(obj))
      const joke = obj.value.joke || 'No joke for you.'
      document.getElementById("jokeLbl").innerHTML = joke;
      return joke
    } catch (error) { console.error(error) }
  }
  
//   // interact with DOM
//   const updateWithJoke = async (event) => {
//     try {
//       document.querySelector('#result').innerHTML = ''
//       const answer = await getJoke()
//       document.querySelector('#result').innerHTML = answer
//     } catch (error) { console.error(error) }
//   }