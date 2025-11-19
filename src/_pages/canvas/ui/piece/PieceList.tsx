import {Box, Typography} from "@mui/material";
import {usePiecesContext} from "@/_pages/canvas/contexts/PiecesContext";
import {PieceItem} from "@/_pages/canvas/ui/piece/PieceItem";
import NewPieceModal from "@/_pages/canvas/ui/new-piece-modal/NewPieceModal";


export function PieceList() {
  const {pieces} = usePiecesContext();

  return (
      <Box width={"100%"} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5">Pieces to Allocate</Typography>
        <>
          {pieces.map(piece => (
              <PieceItem key={piece.id} piece={piece}/>
          ))}
          <NewPieceModal/>
        </>
      </Box>
  );
}


