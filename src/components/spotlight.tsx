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
  const mouse = useStore<Partial<Point>>({});
  const rect = useStore<Partial<Point>>({});
  const card = useSignal<HTMLDivElement>();

  useOnWindow(
    "pointermove",
    $((e) => {
      const { x, y, pointerType } = e as PointerEvent;
      if (pointerType !== "mouse") return;
      mouse.x = x;
      mouse.y = y;
    }),
  );

  useOnWindow(
    "scroll",
    $(() => {
      const { left, top } = card.value!.getBoundingClientRect();
      rect.x = left;
      rect.y = top;
    }),
  );

  useVisibleTask$(({ cleanup }) => {
    const ro = new ResizeObserver(() => {
      const { left, top } = card.value!.getBoundingClientRect();
      rect.x = left;
      rect.y = top;
    });
    ro.observe(card.value!);
    cleanup(() => ro.disconnect());
  });

  const coords = useComputed$(() => ({
    x: mouse.x && rect.x ? mouse.x - rect.x : undefined,
    y: mouse.y && rect.y ? mouse.y - rect.y : undefined,
  }));

  return (
    <div ref={card} class="relative rounded-lg">
      <div
        style={{
          background:
            coords.value.x === undefined || coords.value.y === undefined
              ? undefined
              : `radial-gradient(250px circle at ${coords.value.x}px ${coords.value.y}px, #fef3c7 0, #737373 50%, transparent 100%)`,
        }}
        class="absolute -inset-px rounded-lg"
      ></div>

      <div class="absolute inset-0 rounded-[7px] bg-gray-950"></div>

      <div class="relative overflow-hidden">
        <Slot />
      </div>
    </div>
  );
});

export default Spotlight;
