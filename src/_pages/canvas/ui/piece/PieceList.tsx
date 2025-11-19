import {Box, Typography} from "@mui/material";
import {usePiecesContext} from "@/contexts/PiecesContext";
import {PieceItem} from "@/_pages/canvas/ui/piece/PieceItem";


export function PieceList() {
  const {pieces} = usePiecesContext();

  return (
      <Box width={250} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6">Peças a Alocar</Typography>
        <>
          {pieces.map(piece => (
              <PieceItem key={piece.id} piece={piece}/>
          ))}
        </>
      </Box>
  );
}


