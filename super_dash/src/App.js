function App() {
  return (
      <div className="App">
          <p>Hello World</p>
          <button onClick={()=>{
              const data = fetch("/news",{
                  method:"GET"
              }).then(response =>{
                  if(response.status !== 200){
                      throw new Error("response code not 200")
                  }
                  return response

              }).then(response =>{
                  return response.json()

              }).catch(error => {
                  console.log("There was some problem with the fetch", error)
              })
              console.log(data)
          }}>
              Test the server</button>
      </div>
  );
}

export default App;
