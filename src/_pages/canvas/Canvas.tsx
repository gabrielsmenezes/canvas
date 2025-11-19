"use client";


import {DragDropProvider} from "@/contexts/DragDropProvider";
import {EditorPage} from "@/_pages/canvas/ui/EditorPage";
import {PiecesProvider} from "@/contexts/PiecesContext";

export default function CanvasPage() {
  return (
      <DragDropProvider>
        <PiecesProvider>
          <EditorPage />
        </PiecesProvider>
      </DragDropProvider>
  );
}
