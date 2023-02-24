export const mapFetchStoresByAddressResponse = (response) => {
	return response["Estabelecimentos"].map((item) => {
		const hoursPickup = item["HorarioFuncionamentoTextoBalcao"].map((item) => {
			return {
				day: item["Dia"],
				today: item["Hoje"],
				hour: item["Hora"],
				schedule: item["Horario"]
			}
		}) || []

		const hoursDelivery = item["HorarioFuncionamentoTextoDelivery"].map((item) => {
			return {
				day: item["Dia"],
				today: item["Hoje"],
				hour: item["Hora"],
				schedule: item["Horario"]
			}
		}) || []

		const tags = item["Tags"].map((item) => {
			return {
				name: item["Nome"]
			}
		}) || []

		return {
			id: item["Id"],
			address: item["Endereco"],
			distance: item["Distancia"],
			hoursPickup: hoursPickup,
			hoursDelivery: hoursDelivery,
			latitude: item["LatitudeEstabelecimento"],
			longitude: item["LongitudeEstabelecimento"],
			name: item["Nome"],
			hasDelivery: item["PossuiDelivery"],
			tags: tags
		}
	})
}
