import {PlacedPiece} from "@/entities/PlacedPiece";

export function isColliding(newPiece: PlacedPiece, existing: PlacedPiece[]) {

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