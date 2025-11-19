import {ReactNode, createContext, useContext, useMemo, useState, useEffect} from "react"
import {Piece} from "@/entities/Piece";
import {findAllPiecesFromAPI} from "@/_pages/canvas/api/findAllPiecesFromAPI";

interface PiecesContextType {
  pieces: Piece[]
  decreaseQuantity: (piece: Piece) => void
}

const PiecesContext = createContext<PiecesContextType | undefined>(undefined)

export function PiecesProvider({children}: Readonly<{ children: ReactNode }>) {

  const [_pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    findAllPiecesFromAPI().then(pieces => setPieces([...pieces]))
  }, [])

  const pieces = useMemo(
      () => _pieces.filter((p) => p.quantity > 0),
      [_pieces]
  )

  function decreaseQuantity(piece: Piece) {
    setPieces(prev =>
        prev.map(p =>
            p.id === piece.id ? { ...p, quantity: p.quantity - 1 } : p
        )
    );
  }

  const contextValue = useMemo(() => {
    return {
      pieces,
      decreaseQuantity,
    }
  }, [
    pieces,
    decreaseQuantity,
  ])

  return (
      <PiecesContext.Provider value={contextValue}>
        {children}
      </PiecesContext.Provider>
  )
}

export function usePiecesContext() {
  const context = useContext(PiecesContext)
  if (!context) {
    throw new Error("usePieceContext must be used within a PieceProvider")
  }
  return context
}
