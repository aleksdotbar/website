import { useComputed$ } from "@builder.io/qwik";
import {
  $,
  component$,
  useStore,
  Slot,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";

type Point = { x: number; y: number };

const Spotlight = component$(() => {
  const card = useSignal<HTMLDivElement>();

  const rect = useStore<Partial<Point>>({});

  const setRect = $(() => {
    const { left, top } = card.value!.getBoundingClientRect();
    rect.x = left;
    rect.y = top;
  });

  useOnWindow(["scroll", "resize"], setRect);

  useVisibleTask$(({ cleanup }) => {
    const ro = new ResizeObserver(setRect);
    ro.observe(card.value!);
    cleanup(() => ro.disconnect());
  });

  const mouse = useStore<Partial<Point>>({});

  useOnWindow(
    "pointermove",
    $((e) => {
      const { x, y, pointerType } = e as PointerEvent;
      if (pointerType !== "mouse") return;
      mouse.x = x;
      mouse.y = y;
    }),
  );

  const coords = useComputed$(() => ({
    x: mouse.x && rect.x ? mouse.x - rect.x : undefined,
    y: mouse.y && rect.y ? mouse.y - rect.y : undefined,
  }));

  return (
    <div ref={card} class="relative rounded-lg shadow">
      <div
        style={{
          background:
            coords.value.x === undefined || coords.value.y === undefined
              ? undefined
              : `radial-gradient(250px circle at ${coords.value.x}px ${coords.value.y}px, #fef3c7 0, #737373 50%, transparent 100%)`,
        }}
        class="absolute -inset-px rounded-lg"
      ></div>

      <div class="absolute inset-0 rounded-[7px] bg-gradient-to-tl from-black via-gray-950 to-black"></div>

      <div class="relative">
        <Slot />
      </div>
    </div>
  );
});

export default Spotlight;
