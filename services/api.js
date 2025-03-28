const API_BASE_URL = "http://127.0.0.1:5000";

const ApiService = {
  async getCountries() {
    try {
      const response = await fetch(`${API_BASE_URL}/countries`);
      if (!response.ok) throw new Error("Error al obtener países");
      return await response.json();
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  },
};

export default ApiService;
