import { availableParams } from "@/config";

export function filterDiscoverParams(
  params?: Record<string, string>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(params ?? {}).filter(([key]) =>
      availableParams.includes(key)
    )
  );
}
