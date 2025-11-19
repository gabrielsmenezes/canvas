import {api} from "@/shared/api/api";
import {Piece} from "@/entities/Piece";

export async function findAllPiecesFromAPI(): Promise<Piece> {
  const response = await api.get<Piece>(
      `/my-pieces`,
  )

  if (response.status === 200) {
    return response.data
  } else {
    throw new Error("Failed to fetch pieces from API")
  }
}