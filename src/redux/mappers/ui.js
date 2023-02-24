export const mapFetchHighlightsResponse = (response) => {
  return response["Grupos"].map((acc) => {
    const highlights = acc["Destaques"].map((item) => {
      return {
        deepLinking: item["DeepLinking"],
        description: item["Descricao"],
        image: item["Imagem"],
        origin: item["Ordem"],
        url: item["Url"]
      }
    }) || []

    return {
      highlights: highlights,
      name: acc["Nome"],
      imgUrl: acc["ImagemUrl"]
    }
  }) || []
}

export const mapFetchHighlightsWorkResponse = (response) => {
  return [
    {
      highlights: response["Destaques"].map((item) => {
        return {
          deepLinking: item["DeepLinking"],
          description: item["Descricao"],
          image: item["Imagem"],
          origin: item["Ordem"],
          url: item["Url"]
        }
      }) || [],
      name: "WorkWithUs",
      imgUrl: null
    }
  ]
}

export const mapFetchEvidenceResponse = (response) => {
  return response["Destaques"].map((item) => {
    return {
      image: item["Imagem"]
    }
  })
}