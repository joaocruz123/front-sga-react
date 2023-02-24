export const mapStoreData = (data, index) => {
    const categories = data['Categorias'] && data['Categorias'].length && data['Categorias'].map((mappedItem) => {
        const products = mappedItem['Produtos'].length && mappedItem['Produtos'].map(mapStoreDataProducts)

        return {
            id: mappedItem['Id'],
            name: mappedItem['Nome'],
            coupon: mappedItem['Cupom'],
            limit: mappedItem['LimiteProduto'],
            award: mappedItem['Premio'],
            promotional: mappedItem['Promocional'],
            products
        }
    })

    return categories
}

const mapStoreDataProducts = (data) => {
    const additionals = data['Acompanhamentos'] && data['Acompanhamentos'].length && data['Acompanhamentos'].map((additionalsMappedItem) => {
      const additionalsItems = additionalsMappedItem['Itens'] && additionalsMappedItem['Itens'].length && additionalsMappedItem['Itens'].map((additionalsItemsMappedItem) => {
        return {
          counter: additionalsItemsMappedItem['Balcao'],
          delivery: additionalsItemsMappedItem['Delivery'],
          description: additionalsItemsMappedItem['Descricao'],
          name: additionalsItemsMappedItem['Nome'],
          price: additionalsItemsMappedItem['Valor'],
          packPrice: additionalsItemsMappedItem['ValorEmbalagem'],
          code: additionalsItemsMappedItem['Codigo'],
          calcType: additionalsMappedItem['TipoCalculoCustomizacao'],
          groupId: additionalsItemsMappedItem['GrupoId'],
          minimum: additionalsMappedItem['Minimo'],
          maximum: additionalsMappedItem['Maximo']
        }
     })
  
      return {
        name: additionalsMappedItem['Nome'],
        minimum: additionalsMappedItem['Minimo'],
        maximum: additionalsMappedItem['Maximo'],
        checkbox: additionalsMappedItem['Checkbox'],
        calcType: additionalsMappedItem['TipoCalculoCustomizacao'],
        groupId: additionalsItems[0].groupId,
        items: additionalsItems
      }
   })
  
    return {
      id: data['Id'],
      name: data['Nome'],
      description: data['Descricao'],
      price: data['Valor'],
      image: data['Imagem'],
      promotionalValue: data['ValorPromocional'],
      rewardImage: data['ImagemPremio'],
      couponId: data['CupomId'],
      additionals,
      delivery: data['Delivery'],
      couponDiscont: data['DescontoCupom'],
      viewFrom: data['ExibirApartirDe'],
      loyaltyModalIdPoints: data['FidelidadeModeloPontosId'],
      loyaltyProductAwardId: data['FidelidadeProdutoPremioId'],
      freeShipping: data['FreteGratis'],
      limitPurchaseCupom: data['LimiteCompraProdutosCupom'],
      message: data['Mensagem'],
      level: data['Nivel'],
      cupomName: data['NomeCupom'],
      observation: data['Observacao'],
      points: data['Pontos'],
      promotionInactivated: data['PromocaoInativada'],
      promotional: data['Promocional'],
      statusId: data['StatusId'],
      success: data['Sucesso'],
      nutritionalTable: data['TabelaNutricional'],
      tags: data['Tags'],
      typeValueCupomId: data['TipoValorCupomId'],
      value: data['Valor'],
      valueFrom: data['ValorApartirDe'],
      packagingValue: data['ValorEmbalagem'],
      valuePromotional: data['ValorPromocional']
    }
  }