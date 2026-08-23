const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      alert(
        "Não foi possível buscar os pensamentos, tente novamente mais tarde.",
      );
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch (error) {
      alert(
        "Não foi possível buscar os pensamentos, tente novamente mais tarde.",
      );
      throw error;
    }
  },
};

export default api;
