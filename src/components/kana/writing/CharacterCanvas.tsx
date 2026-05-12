import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { Undo2, Trash2 } from "lucide-react";
import { drawGridOnCanvas, renderGuideToCanvas, scoreDrawing, type ScoreResult } from "./scoring";

export const CANVAS_SIZE = 300;

export interface CharacterCanvasRef {
  clear: () => void;
  undo: () => void;
  getScore: (char: string, rightHalfOnly?: boolean) => ScoreResult;
  hasStrokes: () => boolean;
  getCanvas: () => HTMLCanvasElement | null;
}

interface Props {
  guideChar?: string;
  guideAlpha?: number;
  rightGuideAlpha?: number;
  brushColor?: string;
  brushSize?: number;
  disabled?: boolean;
  onStrokeEnd?: () => void;
  maxSize?: number;
}

export const CharacterCanvas = forwardRef<CharacterCanvasRef, Props>(
  (
    {
      guideChar,
      guideAlpha = 0.12,
      rightGuideAlpha,
      brushColor = "#1a1a2e",
      brushSize = 4,
      disabled = false,
      onStrokeEnd,
      maxSize = 360,
    },
    ref,
  ) => {
    const guideRef = useRef<HTMLCanvasElement>(null);
    const drawRef = useRef<HTMLCanvasElement>(null);
    const strokeHistoryRef = useRef<ImageData[]>([]);
    const isDrawingRef = useRef(false);
    const pathRef = useRef<{ x: number; y: number }[]>([]);

    useEffect(() => {
      const canvas = guideRef.current;
      if (!canvas) return;
      if (guideChar) {
        renderGuideToCanvas(canvas, guideChar, guideAlpha, rightGuideAlpha);
      } else {
        const ctx = canvas.getContext("2d")!;
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        drawGridOnCanvas(ctx, CANVAS_SIZE);
      }
    }, [guideChar, guideAlpha, rightGuideAlpha]);

    const toCanvasPos = useCallback((clientX: number, clientY: number) => {
      const canvas = drawRef.current!;
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * CANVAS_SIZE,
        y: ((clientY - rect.top) / rect.height) * CANVAS_SIZE,
      };
    }, []);

    const beginStroke = useCallback(
      (x: number, y: number) => {
        if (disabled) return;
        isDrawingRef.current = true;
        pathRef.current = [{ x, y }];
        const ctx = drawRef.current!.getContext("2d")!;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;
        ctx.beginPath();
        ctx.moveTo(x, y);
      },
      [disabled, brushColor, brushSize],
    );

    const extendStroke = useCallback(
      (x: number, y: number) => {
        if (!isDrawingRef.current) return;
        const path = pathRef.current;
        path.push({ x, y });
        const ctx = drawRef.current!.getContext("2d")!;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = brushColor;
        ctx.lineWidth = brushSize;

        if (path.length >= 3) {
          const prev = path[path.length - 3];
          const mid = path[path.length - 2];
          const midX1 = (prev.x + mid.x) / 2;
          const midY1 = (prev.y + mid.y) / 2;
          const midX2 = (mid.x + x) / 2;
          const midY2 = (mid.y + y) / 2;
          ctx.beginPath();
          ctx.moveTo(midX1, midY1);
          ctx.quadraticCurveTo(mid.x, mid.y, midX2, midY2);
          ctx.stroke();
        } else {
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      },
      [brushColor, brushSize],
    );

    const finishStroke = useCallback(() => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      pathRef.current = [];
      const canvas = drawRef.current!;
      const ctx = canvas.getContext("2d")!;
      strokeHistoryRef.current.push(ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE));
      onStrokeEnd?.();
    }, [onStrokeEnd]);

    // Mouse
    const onMouseDown = (e: React.MouseEvent) => {
      const p = toCanvasPos(e.clientX, e.clientY);
      beginStroke(p.x, p.y);
    };
    const onMouseMove = (e: React.MouseEvent) => {
      if (!isDrawingRef.current) return;
      const p = toCanvasPos(e.clientX, e.clientY);
      extendStroke(p.x, p.y);
    };
    const onMouseUp = () => finishStroke();

    // Touch
    const onTouchStart = (e: React.TouchEvent) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      const p = toCanvasPos(t.clientX, t.clientY);
      beginStroke(p.x, p.y);
    };
    const onTouchMove = (e: React.TouchEvent) => {
      e.preventDefault();
      const t = e.changedTouches[0];
      const p = toCanvasPos(t.clientX, t.clientY);
      extendStroke(p.x, p.y);
    };
    const onTouchEnd = (e: React.TouchEvent) => {
      e.preventDefault();
      finishStroke();
    };

    useImperativeHandle(ref, () => ({
      clear: () => {
        const ctx = drawRef.current!.getContext("2d")!;
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        strokeHistoryRef.current = [];
      },
      undo: () => {
        const history = strokeHistoryRef.current;
        history.pop();
        const ctx = drawRef.current!.getContext("2d")!;
        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        if (history.length > 0) {
          ctx.putImageData(history[history.length - 1], 0, 0);
        }
      },
      getScore: (char, rightHalfOnly = false) =>
        scoreDrawing(drawRef.current!, char, { rightHalfOnly }),
      hasStrokes: () => strokeHistoryRef.current.length > 0,
      getCanvas: () => drawRef.current,
    }));

    return (
      <div className="flex flex-col items-center gap-3">
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-blue-200/40 shadow-sm"
          style={{ maxWidth: maxSize, aspectRatio: "1" }}
        >
          {/* Guide layer */}
          <canvas
            ref={guideRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="absolute inset-0 w-full h-full"
            style={{ background: "#fafaf7" }}
          />
          {/* Drawing layer */}
          <canvas
            ref={drawRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="absolute inset-0 w-full h-full"
            style={{
              touchAction: "none",
              background: "transparent",
              cursor: disabled ? "default" : "crosshair",
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          />
        </div>

        {/* Controls */}
        {!disabled && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                const history = strokeHistoryRef.current;
                history.pop();
                const ctx = drawRef.current!.getContext("2d")!;
                ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                if (history.length > 0) ctx.putImageData(history[history.length - 1], 0, 0);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Undo2 className="h-3 w-3" /> Undo
            </button>
            <button
              onClick={() => {
                const ctx = drawRef.current!.getContext("2d")!;
                ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                strokeHistoryRef.current = [];
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-red-400/50 hover:text-red-400"
            >
              <Trash2 className="h-3 w-3" /> Clear
            </button>
          </div>
        )}
      </div>
    );
  },
);

CharacterCanvas.displayName = "CharacterCanvas";
