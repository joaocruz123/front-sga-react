export const mapAddressByCEP = (data) => {
    return {
        id: data['id'],
        name: data['nome'],
        email: data['email'],
        cpf: data['cpf'],
        sex: "masculino",
        "telefone": "91981491970",
        "celular": "91981491970",
        "data_nascimento": "20-03-1993",
        "estado_civil": "casado",
        "cep": null,
        "endereco": null,
        "bairro": null,
        "numero": null,
        "complemento": null,
        "cidade": null,
        "estado": null,
        "profissao": null,
        "endereco_trabalho": null,
        "atuacao": null,
        "data_conversao": null,
        "batizado": null,
        "afastado": null,
        "created_at": null,
        "updated_at": null,
        "deleted_at": null,
        "avatar": "default.png"
    }
}

export const mapAddressCreateDataDelivery = (data) => {
    return {
        "Cep": data['cep'],
        "Endereco": data['main'],
        "Localizacao": {
            "Latitude": data['latitude'],
            "Longitude": data['longitude']
        },
        "Numero": data['number'],
        "Complemento": data['complement'],
    }
}

export const mapAddressCreateDataPickup = (data) => {
    return {
        "Texto": "",
        "CidadeId": 0,
        "Localizacao": {
            "Latitude": data['latitude'],
            "Longitude": data['longitude']
        },
        "ModalidadeRetiradaId": 0,
        "AglomeracaoId": 0,
        "TotalRegistros": 0
    }
}