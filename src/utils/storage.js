export const login = (token)=> {
    localStorage.setItem('token', token);
}

export const isAuthenticated = () =>{
    return !!localStorage.getItem('token'); // OS DOIS !! UM PARA VERIFICAR SE NAO È NULO E OUTRO È VERDADEIRO
}   

export const logout = () =>{
    localStorage.removeItem('token')
}