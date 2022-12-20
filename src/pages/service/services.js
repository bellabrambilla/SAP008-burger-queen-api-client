const reqPadrao= async (endPoint, metodo, body) => {
    const url = `https://lab-api-bq.onrender.com${endPoint}`

    try {
        const response = await fetch(url, {
            metodo,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await (data = response.json());
    } catch (json) {
        const code = json.code;
        if (code === 401 || code === 404) {
            throw new Error(json.message);
        }
    } 
  
  };
  // services referente a auth 
  
  export const register = (nome, email, senha, cargo) => {
    return reqPadrao("/users", "POST", {
      nome,
      email,
      senha,
      cargo,
      restaurant: "SIS-Burguer",
    })
  };
  
  export const login = (email, senha) =>{

  reqPadrao("/auth", "POST", {
    email,
    senha,
  }).then((data) => {
    const data = response.json();
    const token = data.token;
    localStorage.setItem("userToken", token);
  })
};

export const Logout = () => {
    localStorage.clear();
  };

//services referente aos produtos / data

  export const TodosProdutos = async (token) => {
    const url = `https://lab-api-bq.onrender.com/products`
    const token = localStorage.getItem("userToken")
    const metodo = "GET"
    try {
        const response = await fetch(url, {
            metodo,
            headers: {
                "Authorization": `${token}`,
                ...headers
            },
        });
        return await (data = response.json());
    } catch (data) {
        const code = data.code;
        if (code != 200) {
            throw new Error(data.message);
        }
    }};