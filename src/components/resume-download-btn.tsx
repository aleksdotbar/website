import { component$, useSignal, $ } from "@builder.io/qwik";

const download = (blob: Blob, filename: string) => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
};

export default component$(() => {
  const isDownloading = useSignal(false);

  const handleClick = $(async (e: PointerEvent) => {
    if (isDownloading.value) return;

    isDownloading.value = true;

    try {
      const blob = await fetch("/api/pdf").then((res) => res.blob());
      download(blob, "Resume - Alexander Barkhatov.pdf");
    } finally {
      isDownloading.value = false;
    }
  });

  return (
    <a
      href="/api/pdf"
      download="Resume - Alexander Barkhatov.pdf"
      class="fixed right-5 top-5 flex w-8 items-center gap-2 rounded bg-gray-800 px-2 py-2 text-white shadow-lg transition hover:bg-gray-700 aria-[disabled]:cursor-not-allowed aria-[disabled]:bg-gray-500 aria-[disabled]:hover:bg-gray-500 print:hidden md:w-44 md:px-4"
      aria-disabled={isDownloading.value ? "true" : undefined}
      onClick$={handleClick}
      preventdefault:click
    >
      {isDownloading.value ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              id="svgSpinnersPulseMultiple0"
              fill="freeze"
              attributeName="r"
              begin="0;svgSpinnersPulseMultiple2.end"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="0;11"
            />
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="0;svgSpinnersPulseMultiple2.end"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="1;0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              id="svgSpinnersPulseMultiple1"
              fill="freeze"
              attributeName="r"
              begin="svgSpinnersPulseMultiple0.begin+0.2s"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="0;11"
            />
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="svgSpinnersPulseMultiple0.begin+0.2s"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="1;0"
            />
          </circle>
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate
              id="svgSpinnersPulseMultiple2"
              fill="freeze"
              attributeName="r"
              begin="svgSpinnersPulseMultiple0.begin+0.4s"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="0;11"
            />
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="svgSpinnersPulseMultiple0.begin+0.4s"
              calcMode="spline"
              dur="1.2s"
              keySplines=".52,.6,.25,.99"
              values="1;0"
            />
          </circle>
        </svg>
      ) : (
        <span class="i-lucide-download"></span>
      )}
      <span class="hidden md:block">
        {isDownloading.value ? "Bip bop..." : "Download PDF"}
      </span>
    </a>
  );
});
