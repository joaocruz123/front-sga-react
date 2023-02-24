import moment from "moment"

export const mapLoginCreateRequest = (data) => {
	const {
		email,
		password
	} = data

	return {
		"Email": email,
		"Senha": password
	}
}

export const mapLoginCreateData = (data) => {
	return {
		name: data['user_name'],
		success: data['success'],
		accessToken: data['access_token'],
		tokenType: data['token_type'],
		message: data['Mensagem'],
		expiresAt: data['expires_at']
	}
}

export const mapSignUpCreateData = (data) => {
	return {
		'Nome': data.name,
		'SobreNome': data.lastName,
		'Email': data.email,
		'Senha': data.password,
		'ConfirmaSenha': data.password2,
		'DataNascimento': data.birthDate,
		'Cpf': data.CPF,
		'Telefone': data.phone,
		'GoogleUsuarioId': data.googleUserId,
    'GoogleToken': data.googleToken,
    'FacebookUsuarioId': data.facebookUserId,
    'FacebookToken': data.facebookToken,
    'FotoId': data.image
	}
}


export const mapAuthCreateResponse = (response) => {
	const expiresSeconds = response["Token"] && response["Token"]["ExpiresIn"];
	return {
			user: {
					id: response["UsuarioId"],
					authToken: response["AuthenticationToken"],
					name: response["Nome"],
					lastname: response["SobreNome"],
					email: response["Email"],
					cpf: response["Cpf"],
					phone: response["Telefone"],
					birthdate: response["DataNascimento"],
					mustUpdate: response["AtualizacaoObrigatoria"],
					hasUpdate: response["TemAtualizacao"],
					signUpStatus: response["StatusCadastro"],
					signUp: response["Cadastrar"],
					updateData: response["AtualizarDados"],
					loginType: response["TipoLogin"],
					token: {
							accessToken: response["Token"] && response["Token"]["AccessToken"],
							type: response["Token"] && response["Token"]["TokenType"],
							expires: moment().add("seconds", expiresSeconds).toISOString(),
					}
			},
			success: response["Sucesso"],
			message: response["Mensagem"],
	}
}

export const mapForgotPasswordFormToAPI = (email) => {
	return {
			"Email": email
	}
}

export const mapFbLoginFormToAPI = (data) => {
  return {
    'FacebookToken': data.accessToken,
    'Email': data.email,
    'FacebookUsuarioId': data.userID
  }
}

export const mapGoogleLoginFormToAPI = (data) => {
  return {
    'GoogleToken': data.accessToken,
    'Email': data.profileObj.email,
    'GoogleUsuarioId': data.googleId
  }
}

export const mapAuthAPIResponse = (data) => {
  const expiresSeconds = data['Token'] && data['Token']['ExpiresIn']

  return {
    user: {
      id: data['UsuarioId'],
      authToken: data['AuthenticationToken'],
      name: data['Nome'],
      lastname: data['SobreNome'],
      email: data['Email'],
      cpf: data['Cpf'],
      phone: data['Telefone'],
      birthdate: data['DataNascimento'],
      mustUpdate: data['AtualizacaoObrigatoria'],
      hasUpdate: data['TemAtualizacao'],
      signUpStatus: data['StatusCadastro'],
      signUp: data['Cadastrar'],
      updateData: data['AtualizarDados'],
      loginType: data['TipoLogin'],
      token: {
        accessToken: data['Token'] && data['Token']['AccessToken'],
        type: data['Token'] && data['Token']['TokenType'],
        expires: moment().add('seconds', expiresSeconds).toISOString()
      }
    },
    success: data['Sucesso'],
    message: data['Mensagem']
  }
}
