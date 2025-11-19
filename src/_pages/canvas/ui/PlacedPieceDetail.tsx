import {PlacedPiece} from "@/entities/PlacedPiece";
import {Box, Typography} from "@mui/material";
import React from "react";

export function PlacedPieceDetail({ pieceId, y, x, width, height, id}: PlacedPiece): React.ReactNode {
  return (
      <Box>
        <Typography variant="h6">Piece ID: {pieceId}</Typography>
        <Typography variant="h6">Object ID: {id}</Typography>
        <Typography variant="body1">Position: {x}, {y}</Typography>
        <Typography variant="body2">Dimensions: {width}x{height}</Typography>
      </Box>
  )

}