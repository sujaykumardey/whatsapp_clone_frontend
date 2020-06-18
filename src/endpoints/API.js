export const api='http://localhost:4000'


export const RegistrationUser = (data) => {
    const result = fetch(`${api}/api/registration`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  
      .then((data) => data.json())
      .then((data) => data);
    return result;
  };
  

  export const signinUser = (data) => {
    const result = fetch(`${api}/api/signin`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  
      .then((data) => data.json())
      .then((data) => data);
    return result;
  };

  export const mediafileUpload=(file)=>{
    const result=fetch(`${api}/api/fileupload`, {
    method: 'POST',
    body: file, 
    
  })
  .then(response => response.json())
  .then(data => data)
  return result;
  
}
  