import { useCallback, useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Undo2, Trash2, Sparkle, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import {
  recognizeHandwriting,
  type HandwritingResult,
} from "@/fns/handwriting-recognize.functions";

const CANVAS_SIZE = 400;
const BRUSH_COLOR = "#e8dcc8"; // warm off-white stroke on dark canvas
const BRUSH_SIZE = 6;

interface Props {
  onRecognized: (text: string) => void;
}

export function HandwritingCanvas({ onRecognized }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokeHistoryRef = useRef<ImageData[]>([]);
  const isDrawingRef = useRef(false);
  const recognize = useServerFn(recognizeHandwriting);

  const [hasStrokes, setHasStrokes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HandwritingResult | null>(null);

  // Initialize canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#12141a";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // Grid lines for character guidance
    ctx.strokeStyle = "rgba(201,168,76,0.08)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(CANVAS_SIZE / 2, 0);
    ctx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE);
    ctx.moveTo(0, CANVAS_SIZE / 2);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE / 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }, []);

  const getCoords = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = CANVAS_SIZE / rect.width;
    const scaleY = CANVAS_SIZE / rect.height;

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
      // Save state before this stroke
      strokeHistoryRef.current.push(ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE));
      isDrawingRef.current = true;

      const { x, y } = getCoords(e);
      ctx.strokeStyle = BRUSH_COLOR;
      ctx.lineWidth = BRUSH_SIZE;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
      setHasStrokes(true);
      setResult(null);
    },
    [getCoords],
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      if (!isDrawingRef.current) return;
      const ctx = canvasRef.current!.getContext("2d")!;
      const { x, y } = getCoords(e);
      ctx.lineTo(x, y);
      ctx.stroke();
    },
    [getCoords],
  );

  const endDraw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDrawingRef.current = false;
  }, []);

  const undo = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const prev = strokeHistoryRef.current.pop();
    if (prev) {
      ctx.putImageData(prev, 0, 0);
      setHasStrokes(strokeHistoryRef.current.length > 0);
    }
  };

  const clear = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#12141a";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // Redraw grid
    ctx.strokeStyle = "rgba(201,168,76,0.08)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(CANVAS_SIZE / 2, 0);
    ctx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE);
    ctx.moveTo(0, CANVAS_SIZE / 2);
    ctx.lineTo(CANVAS_SIZE, CANVAS_SIZE / 2);
    ctx.stroke();
    ctx.setLineDash([]);
    strokeHistoryRef.current = [];
    setHasStrokes(false);
    setResult(null);
  };

  const handleRecognize = async () => {
    const canvas = canvasRef.current!;
    const dataUrl = canvas.toDataURL("image/png");
    const base64 = dataUrl.split(",")[1];
    if (!base64) return;

    setLoading(true);
    try {
      const res = await recognize({ data: { imageBase64: base64 } });
      if (res.error) {
        toast.error(res.error);
      } else if (res.result) {
        setResult(res.result);
      }
    } catch {
      toast.error("Recognition failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Draw a kanji or kana character with your finger. AI will identify it.
      </p>

      {/* Canvas */}
      <div className="relative mx-auto w-full" style={{ maxWidth: CANVAS_SIZE, aspectRatio: "1" }}>
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="w-full h-full rounded-2xl border border-gold/20 cursor-crosshair"
          style={{ touchAction: "none" }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          disabled={!hasStrokes}
          className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground disabled:opacity-30"
        >
          <Undo2 className="h-3.5 w-3.5" /> Undo
        </button>
        <button
          onClick={clear}
          disabled={!hasStrokes}
          className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground disabled:opacity-30"
        >
          <Trash2 className="h-3.5 w-3.5" /> Clear
        </button>
        <button
          onClick={handleRecognize}
          disabled={!hasStrokes || loading}
          className="ml-auto flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition-colors hover:bg-gold/20 disabled:opacity-40"
        >
          {loading ? (
            <>
              <RefreshCw className="h-3.5 w-3.5 animate-spin" /> Recognizing…
            </>
          ) : (
            <>
              <Sparkle className="h-3.5 w-3.5" /> Recognize
            </>
          )}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-5">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            Recognized Character
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-gold/30 bg-card/60 px-5 py-3 text-center">
              <div className="font-display text-4xl leading-none">{result.text}</div>
              <div className="mt-1.5 font-mono text-xs text-gold">{result.reading}</div>
            </div>
            <div>
              <p className="text-base text-foreground">{result.meaning}</p>
              <button
                onClick={() => {
                  onRecognized(result.text);
                  toast("Character loaded into converter");
                }}
                className="mt-3 flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition-colors hover:bg-gold/20"
              >
                Use in Converter →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
