"use client";

import {DragDropProvider} from "@/_pages/canvas/contexts/DragDropProvider";
import {EditorPage} from "@/_pages/canvas/ui/EditorPage";
import {PiecesProvider} from "@/_pages/canvas/contexts/PiecesContext";
import {PiecesInSheetProvider} from "@/_pages/canvas/contexts/PiecesInSheetContext";

export default function CanvasPage() {
  return (
      <DragDropProvider>
        <PiecesProvider>
          <PiecesInSheetProvider>
            <EditorPage />
          </PiecesInSheetProvider>
        </PiecesProvider>
      </DragDropProvider>
  );
}
