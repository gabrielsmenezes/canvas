"use client";


import {DragDropProvider} from "@/_pages/canvas/contexts/DragDropProvider";
import {EditorPage} from "@/_pages/canvas/ui/EditorPage";
import {PiecesProvider} from "@/_pages/canvas/contexts/PiecesContext";

export default function CanvasPage() {
  return (
      <DragDropProvider>
        <PiecesProvider>
          <EditorPage />
        </PiecesProvider>
      </DragDropProvider>
  );
}
