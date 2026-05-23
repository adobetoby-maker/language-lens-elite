import { useCallback, useEffect, useRef, useState } from "react";
import { Undo2, Trash2 } from "lucide-react";

const CANVAS_H_WORD = 110;
const CANVAS_H_SENTENCE = 160;
const BRUSH_COLOR = "#1a1a2e";
const BRUSH_SIZE = 3;

interface Props {
  mode: "word" | "sentence" | "free";
  guideText?: string;
  onReady: (imageBase64: string) => void;
}

export function PenPalCanvas({ mode, guideText, onReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const historyRef = useRef<ImageData[]>([]);
  const isDrawingRef = useRef(false);
  const [hasStrokes, setHasStrokes] = useState(false);

  const canvasH = mode === "word" ? CANVAS_H_WORD : CANVAS_H_SENTENCE;

  const drawRuledLines = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = "#FAF8F3";
    ctx.fillRect(0, 0, w, h);
    // Ruled lines every 32px
    ctx.strokeStyle = "rgba(180,155,110,0.25)";
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    for (let y = 32; y < h; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    // Left margin line
    ctx.strokeStyle = "rgba(200,100,80,0.12)";
    ctx.beginPath();
    ctx.moveTo(36, 0);
    ctx.lineTo(36, h);
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    drawRuledLines(ctx, canvas.width, canvas.height);
  }, [drawRuledLines, canvasH]);

  const coords = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if ("touches" in e) {
      const t = e.changedTouches[0];
      return { x: (t.clientX - rect.left) * scaleX, y: (t.clientY - rect.top) * scaleY };
    }
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  }, []);

  const startDraw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      isDrawingRef.current = true;
      const { x, y } = coords(e);
      ctx.strokeStyle = BRUSH_COLOR;
      ctx.lineWidth = BRUSH_SIZE;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
      setHasStrokes(true);
    },
    [coords],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      if (!isDrawingRef.current) return;
      const ctx = canvasRef.current!.getContext("2d")!;
      const { x, y } = coords(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    [coords],
  );

  const endDraw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDrawingRef.current = false;
  }, []);

  const undo = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const prev = historyRef.current.pop();
    if (prev) {
      ctx.putImageData(prev, 0, 0);
      setHasStrokes(historyRef.current.length > 0);
    }
  };

  const clear = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    drawRuledLines(ctx, canvas.width, canvas.height);
    historyRef.current = [];
    setHasStrokes(false);
  };

  const handleCheck = () => {
    const canvas = canvasRef.current!;
    const base64 = canvas.toDataURL("image/png").split(",")[1];
    if (base64) onReady(base64);
  };

  return (
    <div className="flex flex-col gap-2">
      {guideText && (
        <div
          className="rounded-lg px-3 py-2 text-sm font-semibold"
          style={{
            backgroundColor: "rgba(201,168,76,0.08)",
            color: "#8A7A5A",
            fontFamily: "monospace",
          }}
        >
          ✏️ Write: <span style={{ color: "#1a1a2e" }}>{guideText}</span>
        </div>
      )}
      <div className="relative rounded-xl overflow-hidden border border-amber-200/60 shadow-sm">
        <canvas
          ref={canvasRef}
          width={600}
          height={canvasH}
          className="w-full block"
          style={{ touchAction: "none", cursor: "crosshair", maxHeight: canvasH }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={undo}
          disabled={!hasStrokes}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground disabled:opacity-30"
        >
          <Undo2 className="h-3 w-3" /> Undo
        </button>
        <button
          onClick={clear}
          disabled={!hasStrokes}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-red-400/40 hover:text-red-400 disabled:opacity-30"
        >
          <Trash2 className="h-3 w-3" /> Clear
        </button>
        <button
          onClick={handleCheck}
          disabled={!hasStrokes}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/20 disabled:opacity-40"
        >
          Check my writing →
        </button>
      </div>
    </div>
  );
}
