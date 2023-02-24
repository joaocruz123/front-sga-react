export const mapMessageContactUs = (data) => {
    return {
      'Mensagem': `Mensagem:${data.message}<br/>Cidade:${data.city}<br/>Estado:${data.state}<br/>Loja:${data.store}<br/>Assunto:${data.subject}}`,
      'Email': data.email,
      'Nome': data.fullName,
      'Telefone': data.phone,
    }
  }