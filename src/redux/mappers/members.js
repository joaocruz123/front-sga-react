export const mapFetchMembersResponse = (response) => {
    return response["data"].map((item) => {
        return {
            id: item['id'],
            name: item['nome'],
            email: item['email'],
            cpf: item['cpf'],
            sex: item['sexo'],
            phone: item['phone'],
            cell_phone: item['celular'],
            birth_date: item['data_nascimento'],
            marital_status: item['estado_civil'],
            cep: item['cep'],
            address: item['endereco'],
            neighborhood: item['bairro'],
            number: item['numero'],
            complement: item['complemento'],
            city: item['cidade'],
            state: item['estado'],
            profession: item['profissao'],
            work_address: item['endereco_trabalho'],
            acting: item['atuacao'],
            date_conversation: item['data_conversao'],
            baptized: item['batizado'],
            away: item['afastado'],
            created_at: item['created_at'],
            updated_at: item['updated_at'],
            deleted_at: item['deleted_at'],
            avatar: item['avatar']
        }
    }) || []

}