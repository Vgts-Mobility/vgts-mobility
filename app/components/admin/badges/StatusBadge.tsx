type Props = {
  status: string | null;
};

const styles: Record<string, string> = {
  "В наявності": "bg-green-100 text-green-700",
  "Продано": "bg-red-100 text-red-700",
  "Резерв": "bg-yellow-100 text-yellow-700",
  "В дорозі": "bg-blue-100 text-blue-700",
};

export default function StatusBadge({ status }: Props) {
  const value = status || "В наявності";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
        styles[value] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {value}
    </span>
  );
}