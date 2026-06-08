import { useEffect } from "react";

export default function usePointerGlow(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const target = { x: 50, y: 50, driftX: 0, driftY: 0 };
    const current = { ...target };
    let rafId = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      current.driftX += (target.driftX - current.driftX) * 0.08;
      current.driftY += (target.driftY - current.driftY) * 0.08;

      root.style.setProperty("--pointer-x", `${current.x.toFixed(2)}%`);
      root.style.setProperty("--pointer-y", `${current.y.toFixed(2)}%`);
      root.style.setProperty("--pointer-drift-x", current.driftX.toFixed(4));
      root.style.setProperty("--pointer-drift-y", current.driftY.toFixed(4));

      rafId = window.requestAnimationFrame(render);
    };

    const setPointer = (clientX, clientY) => {
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      target.x = x * 100;
      target.y = y * 100;
      target.driftX = (x - 0.5) * 2;
      target.driftY = (y - 0.5) * 2;
    };

    const handleMove = (event) => setPointer(event.clientX, event.clientY);
    const handleLeave = () => setPointer(window.innerWidth / 2, window.innerHeight / 2);

    handleLeave();
    rafId = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, [rootRef]);
}
