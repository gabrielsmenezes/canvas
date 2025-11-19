import {ReactNode, createContext, useContext, useMemo, useState} from "react"
import {Piece} from "@/entities/Piece";
import {PlacedPiece} from "@/entities/PlacedPiece";
import {isColliding} from "@/shared/utils/ColisionUtils";

interface PiecesInSheetContextType {
  placed: PlacedPiece[],
  selectedPiece: PlacedPiece | null,
  setSelectedPiece: (placedPiece: PlacedPiece | null) => void,
  setPiece: (newItem: PlacedPiece) => boolean,
}

const PiecesInSheetContext = createContext<PiecesInSheetContextType | undefined>(undefined)

export function PiecesInSheetProvider({children}: Readonly<{ children: ReactNode }>) {
  const [placed, setPlaced] = useState<PlacedPiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<PlacedPiece | null>(null);

  function setPiece(newItem: PlacedPiece): boolean {
    let hasCollision = false;

    setPlaced(prev => {
      hasCollision = isColliding(newItem, prev);

      if (hasCollision) {
        return prev;
      }

      return [...prev, newItem];
    });
    return hasCollision;
  }

  const contextValue = useMemo(() => {
    return {
      placed,
      selectedPiece,
      setSelectedPiece,
      setPiece,
    }
  }, [
    placed,
    selectedPiece,
    setSelectedPiece,
    setPiece,
  ])

  return (
      <PiecesInSheetContext.Provider value={contextValue}>
        {children}
      </PiecesInSheetContext.Provider>
  )
}

export function usePiecesInSheetContext() {
  const context = useContext(PiecesInSheetContext)
  if (!context) {
    throw new Error("usePieceInSheetContext must be used within a PieceProvider")
  }
  return context
}
