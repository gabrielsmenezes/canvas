export const api = {
  get: async <T>(url: string) => {
    return {
      data: [
        {id: "1", label: "Porta", width: 120, height: 200, quantity: 2},
        {id: "2", label: "Base", width: 100, height: 50, quantity: 1},
      ] as T,
      status: 200,
    }
  },
}