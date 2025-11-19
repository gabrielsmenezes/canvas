import { useDrag } from "react-dnd";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {Piece} from "@/entities/Piece";

type Props = {
  pieces: Piece[];
};

export function PieceList({ pieces }: Props) {
  return (
      <Box width={250} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h6">Peças a Alocar</Typography>

        {pieces.map(piece => (
            <PieceItem key={piece.id} piece={piece} />
        ))}
      </Box>
  );
}

function PieceItem({ piece }: { piece: Piece }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "PIECE",
    item: piece,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
      <Card
          component="div"
          ref={dragRef as unknown as React.Ref<HTMLDivElement>}
          sx={{
            opacity: isDragging ? 0.4 : 1,
            cursor: "grab",
          }}
      >
        <CardContent>
          <Typography fontWeight="bold">{piece.label}</Typography>
          <Typography variant="body2">
            {piece.width} × {piece.height} (qtd: {piece.quantity})
          </Typography>
        </CardContent>
      </Card>
  );
}
