function tempo(request, response) {
    const dynamicDate = fetch('http://localhost:3000/');

    response.json({
        contatos: dynamicDate.toGMTString(),
    })
}

export default tempo;