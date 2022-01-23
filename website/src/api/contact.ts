import { useMutation, UseMutationResult } from "react-query";
import { HttpError } from "./error";

export interface ContactRequest {
  content: string;
  senderEmail: string;
  subject: string;
}

async function contact (params: ContactRequest) {
  const body = JSON.stringify(params);
  
  const res = await fetch("stephan.tech/api/contact", {
    headers: {
      "Content-Type": "application/json",
      "Content-Length": body.length.toString(10)
    },
    method: "POST",
    cache: "no-store",
    body
  });

  if (res.ok) {
    return;
  }

  throw await HttpError.fromResponse(res);
}

export function useContact (): UseMutationResult<void, unknown, ContactRequest> {
  return useMutation({
    mutationFn: contact
  });
}
