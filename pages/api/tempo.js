function tempo(request, response) {
    const apiSecret =process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const usuarios = fetch ("https://api.github.com/users");
    const usuariosJson = await usuarios.json();
    const login = usuariosJson.login;
    const foto = usuariosJson.avatar_url;

    response.json({
        date: dynamicDate.toGMTString(),
        usuarios: login,
        foto: foto
    })
}

export default tempo;