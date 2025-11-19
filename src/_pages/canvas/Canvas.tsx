"use client";


import {DragDropProvider} from "@/providers/DragDropProvider";
import {EditorPage} from "@/_pages/canvas/ui/EditorPage";

export default function CanvasPage() {
  return (
      <DragDropProvider>
        <EditorPage />
      </DragDropProvider>
  );
}
