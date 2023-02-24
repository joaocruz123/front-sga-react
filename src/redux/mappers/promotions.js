export const mapStoreProductsPromotional = (response) => {
	return response["Promocoes"] && response["Promocoes"].map((data) => {
		return {
			id: data['Id'],
			briefDescription: data['BreveDescricao'],
			clicked: data['Clicado'],
			image: data['Imagem'],
			code: data['Codigo'],
			expirationDate: data['DataExpiracao'],
			description: data['Descricao'],
			textTag: data['TextoTag'],
			typeUsePromotion: data['TipoUsoPromocao'],
			title: data['Titulo'],
			value: data['Valor']
		}
	})
}
