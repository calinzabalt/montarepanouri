import type { ContactPayload } from "@/lib/contact-types";

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContact(
  payload: ContactPayload
): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;

    if (!res.ok || !data?.ok) {
      return {
        ok: false,
        error: data?.error || "Nu am putut trimite mesajul. Încercați din nou.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Eroare de rețea. Verificați conexiunea și încercați din nou.",
    };
  }
}
