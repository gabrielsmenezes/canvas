import {useDrop} from "react-dnd";
import {Box} from "@mui/material";
import {PlacedPiece} from "@/entities/PlacedPiece";
import {Piece} from "@/entities/Piece";
import {useRef} from "react";

type Props = {
  chapaWidth: number;
  chapaHeight: number;
  placed: PlacedPiece[];
  selectedPiece: PlacedPiece | null;
  setSelectedPiece: (placedPiece: PlacedPiece | null) => void;
  onPlace: (piece: Piece, x: number, y: number) => void;
};

export function ChapaEditor({
                              chapaWidth,
                              chapaHeight,
                              placed,
                              selectedPiece,
                              setSelectedPiece,
                              onPlace,
                            }: Props) {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const [, dropRef] = useDrop<Piece, void, unknown>(() => ({
    accept: "PIECE",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset || !dropZoneRef.current) return;

      const dropTargetRect = dropZoneRef.current.getBoundingClientRect();

      const x = offset.x - dropTargetRect.left - item.width / 2;
      const y = offset.y - dropTargetRect.top - item.height / 2;

      onPlace(item, x, y);
    },
  }));

  return (
      <Box
          ref={(el) => {
            dropRef(el);
            (dropZoneRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
          sx={{
            position: "relative",
            width: chapaWidth,
            height: chapaHeight,
            border: "3px solid #000",
            backgroundSize: "20px 20px",
            backgroundImage:
                "linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)",
          }}
      >
        {placed.map((p) => (
            <Box
                key={p.id}
                onClick={() => setSelectedPiece(p)}
                sx={{
                  position: "absolute",
                  left: p.x,
                  top: p.y,
                  width: p.width,
                  height: p.height,
                  background: "rgba(25, 118, 210, 0.4)",
                  border:
                      p.id === selectedPiece?.id ? "3px solid red" : "1px solid #1976d2",
                }}
            />
        ))}
      </Box>
  );
}
