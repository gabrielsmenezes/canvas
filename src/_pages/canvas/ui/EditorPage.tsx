"use client"

import {useEffect, useState} from "react";
import {PieceList} from "./piece/PieceList";
import {Grid, Typography} from "@mui/material";
import {PlacedPiece} from "@/entities/PlacedPiece";
import {Piece} from "@/entities/Piece";
import {SheetEditor} from "@/_pages/canvas/ui/SheetEditor";
import {PlacedPieceDetail} from "@/_pages/canvas/ui/PlacedPieceDetail";
import {usePiecesContext} from "@/_pages/canvas/contexts/PiecesContext";
import {usePiecesInSheetContext} from "@/_pages/canvas/contexts/PiecesInSheetContext";



export function EditorPage() {
  const {decreaseQuantity} = usePiecesContext();
  const { setPiece, selectedPiece} = usePiecesInSheetContext();

  function handlePlace(piece: Piece, x: number, y: number) {
    const newItem: PlacedPiece = {
      id: crypto.randomUUID(),
      pieceId: piece.id,
      width: piece.width,
      height: piece.height,
      x,
      y,
    };
    const hasCollision = setPiece(newItem)
    if (hasCollision) {
      alert("Colisão detectada!");
      return;
    }
    decreaseQuantity(piece);
  }

  return (
      <Grid container spacing={3} sx={{p: 3}}>
        <Grid size={{
          xs: 12,
          md: 3,
        }}>
          <PieceList/>
        </Grid>

        <Grid size={{
          xs: 12,
          md: 6,
        }}>
          <SheetEditor
              sheetWidth={800}
              sheetHeight={400}
              onPlace={handlePlace}
          />
        </Grid>

        <Grid size={{
          xs: 12,
          md: 3,
        }}>
          <Typography variant="h5">Pieces Detail</Typography>
          {selectedPiece && <PlacedPieceDetail {...selectedPiece} />}
        </Grid>
      </Grid>
  )
}
