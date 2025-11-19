import {Piece} from "@/entities/Piece";
import {useDrag} from "react-dnd";
import {Card, CardContent, Typography} from "@mui/material";

export function PieceItem({ piece }: { piece: Piece }) {

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
