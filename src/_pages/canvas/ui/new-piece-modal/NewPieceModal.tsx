"use client"

import * as React from "react";
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {addNewPieceFromAPI} from "@/_pages/canvas/api/addNewPieceFromAPI";
import {Piece} from "@/entities/Piece";
import {usePiecesContext} from "@/_pages/canvas/contexts/PiecesContext";
import {findAllPiecesFromAPI} from "@/_pages/canvas/api/findAllPiecesFromAPI";

export default function NewPieceModal() {
  const { createNewPiece } = usePiecesContext();
  const [open, setOpen] = useState(false);
  const [piece, setPiece] = useState({
    label: "",
    quantity: 0,
    width: 0,
    height: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setPiece({
      label: "",
      quantity: 0,
      width: 0,
      height: 0,
    })
  };

  const createPiece = () => {
    createNewPiece(piece as Piece);
    handleClose();
  };

  return (
      <>
        <Button variant="contained" onClick={handleOpen}>
          Add new piece
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <Typography variant="h5" mb={2}>
                  Adding a new piece
                </Typography>
              </Grid>
              <Grid size={6}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={piece.label}
                    onChange={(e) => setPiece({...piece, label: e.target.value})}
                    placeholder="Ex.: Porta"
                />
              </Grid>

              <Grid size={6}>
                <TextField
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    fullWidth
                    value={piece.quantity}
                    onChange={(e) => setPiece({...piece, quantity: Number(e.target.value)})}
                    placeholder="Ex.: 1"
                    type={"number"}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                    name="width"
                    label="Width"
                    variant="outlined"
                    fullWidth
                    value={piece.width}
                    onChange={(e) => setPiece({...piece, width: Number(e.target.value)})}
                    placeholder="Ex.: 100"
                />
              </Grid>
              <Grid size={6}>
                <TextField
                    name="height"
                    label="Height"
                    variant="outlined"
                    fullWidth
                    value={piece.height}
                    onChange={(e) => setPiece({...piece, height: Number(e.target.value)})}
                    placeholder="Ex.: 200"
                />
              </Grid>

              <Grid size={6}>
                <Button
                    variant="outlined"
                    sx={{ mt: 3 }}
                    onClick={handleClose}
                    fullWidth
                >
                  Close
                </Button>
              </Grid>

              <Grid size={6}>
                <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={createPiece}
                    fullWidth
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </>
  );
}
