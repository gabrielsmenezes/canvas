const pieces = [
    {id: "1", label: "Porta", width: 120, height: 200, quantity: 2},
    {id: "2", label: "Base", width: 100, height: 50, quantity: 1},
]

export const api = {
  get: async <T>(url: string) => {
    return {
      data: [...pieces] as T,
      status: 200,
    }
  },
  post: async <T>(url: string, data: any) => {
    pieces.push(data)

    return {
      status: 200,
    }
  },
}