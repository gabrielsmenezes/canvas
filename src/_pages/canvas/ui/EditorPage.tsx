"use client"

import { useState } from "react";
import { PieceList } from "./PieceList";
import { Stack, Box } from "@mui/material";
import {PlacedPiece} from "@/entities/PlacedPiece";
import {Piece} from "@/entities/Piece";
import { ChapaEditor } from "@/_pages/canvas/ui/ChapaEditor";

function isColliding(newPiece: PlacedPiece, existing: PlacedPiece[]) {
  return existing.some((p) => {
    return !(
        newPiece.x + newPiece.width < p.x ||
        newPiece.x > p.x + p.width ||
        newPiece.y + newPiece.height < p.y ||
        newPiece.y > p.y + p.height
    );
  });
}

export function EditorPage() {
  const [pieces, setPieces] = useState<Piece[]>([
    { id: "1", label: "Porta", width: 120, height: 200, quantity: 2 },
    { id: "2", label: "Base", width: 100, height: 50, quantity: 1 },
  ]);

  const [placed, setPlaced] = useState<PlacedPiece[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handlePlace(piece: Piece, x: number, y: number) {
    const newItem: PlacedPiece = {
      id: crypto.randomUUID(),
      pieceId: piece.id,
      width: piece.width,
      height: piece.height,
      x,
      y,
    };

    if (isColliding(newItem, placed)) {
      alert("Colisão detectada!");
      return;
    }

    setPieces((prev) =>
        prev.map((p) =>
            p.id === piece.id ? { ...p, quantity: p.quantity - 1 } : p
        )
    );

    setPlaced((prev) => [...prev, newItem]);
  }

  return (
      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <PieceList pieces={pieces.filter((p) => p.quantity > 0)} />

        <Box>
          <ChapaEditor
              chapaWidth={800}
              chapaHeight={400}
              placed={placed}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onPlace={handlePlace}
          />
        </Box>
      </Stack>
  );
}
