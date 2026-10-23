const URL_BASE = 'http://localhost:3000/pensamentos'

const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL_BASE}`)
      return await response.json()
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      })
      return await response.json()
    }
    catch {
      alert('Erro ao salvar pensamentos')
      throw error
    }
  },

 async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`)
      return await response.json()
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      })
      return await response.json()
    }
    catch {
      alert('Erro ao editar pensamentos')
      throw error
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`${URL_BASE}/${id}`, {
        method: "DELETE",
      })
    }
    catch {
      alert('Erro ao Excluit pensamentos')
      throw error
    }
  },

}

export default api