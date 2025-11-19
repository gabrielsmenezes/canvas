"use client"

import {useEffect, useState} from "react";
import { PieceList } from "./piece/PieceList";
import { Stack, Box } from "@mui/material";
import {PlacedPiece} from "@/entities/PlacedPiece";
import {Piece} from "@/entities/Piece";
import { SheetEditor } from "@/_pages/canvas/ui/SheetEditor";
import {PlacedPieceDetail} from "@/_pages/canvas/ui/PlacedPieceDetail";
import {usePiecesContext} from "@/_pages/canvas/contexts/PiecesContext";

function isColliding(newPiece: PlacedPiece, existing: PlacedPiece[]) {

  console.log("new piece", newPiece);
  console.log("existing", existing);

  for (const p of existing) {
    const r1 = {
      x1: newPiece.x,
      y1: newPiece.y,
      x2: newPiece.x + newPiece.width,
      y2: newPiece.y + newPiece.height,
    };
    const r2 = {
      x1: p.x,
      y1: p.y,
      x2: p.x + p.width,
      y2: p.y + p.height,
    };

    const isColliding = r1.x1 < r2.x2 && r1.x2 > r2.x1 && r1.y1 < r2.y2 && r1.y2 > r2.y1;

    console.log({
      r1,
      r2,
      isColliding,
    });

    if (isColliding) {
      return true;
    }
  }

  return false;
}

export function EditorPage() {
  const {decreaseQuantity} = usePiecesContext();
  const [placed, setPlaced] = useState<PlacedPiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<PlacedPiece | null>(null);

  useEffect(() => {
    console.log("🔥 selectedPiece", selectedPiece);
  }, [selectedPiece]);

  function handlePlace(piece: Piece, x: number, y: number) {
    const newItem: PlacedPiece = {
      id: crypto.randomUUID(),
      pieceId: piece.id,
      width: piece.width,
      height: piece.height,
      x,
      y,
    };

    let hasCollision = false;

    setPlaced(prev => {
      hasCollision = isColliding(newItem, prev);

      if (hasCollision) {
        return prev;
      }

      return [...prev, newItem];
    });

    if (hasCollision) {
      alert("Colisão detectada!");
      return;
    }

    decreaseQuantity(piece);
  }


  return (
      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <PieceList />

        <Box>
          <SheetEditor
              chapaWidth={800}
              chapaHeight={400}
              placed={placed}
              selectedPiece={selectedPiece}
              setSelectedPiece={setSelectedPiece}
              onPlace={handlePlace}
          />
        </Box>

        <>
          {selectedPiece && <PlacedPieceDetail {...selectedPiece} />}
        </>
      </Stack>
  );
}
