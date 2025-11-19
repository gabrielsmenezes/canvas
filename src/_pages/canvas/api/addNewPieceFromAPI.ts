import {api} from "@/shared/api/api";
import {Piece} from "@/entities/Piece";

export async function addNewPieceFromAPI(piece: Piece) {
  const response = await api.post(
      `/pieces`, piece
  )
  return response.status === 200
}