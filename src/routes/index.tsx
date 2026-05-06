import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "오늘도 귀여웠어 🐾" },
      { name: "description", content: "반려동물과의 하루를 기록하는 앱" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/app.html"
      title="오늘도 귀여웠어"
      style={{ width: "100vw", height: "100vh", border: 0, display: "block" }}
    />
  );
}
