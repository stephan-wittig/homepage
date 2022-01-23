import { useMutation, UseMutationResult } from "react-query";
import * as yup from "yup";
import { HttpError } from "./error";

export interface ContactRequest {
  content: string;
  senderEmail: string;
  subject: string;
}

export const ContactRequestSchema: yup.SchemaOf<ContactRequest> = yup.object({
  content: yup.string()
    .trim()
    .min(2)
    .max(512)
    .required()
    .label("Message"),
  senderEmail: yup.string()
    .trim()
    .email()
    .required()
    .label("Email address"),
  subject: yup.string()
    .trim()
    .min(2)
    .max(64)
    .required()
    .label("Subject")
});

async function contact (params: ContactRequest) {
  const body = JSON.stringify(params);
  
  const res = await fetch("https://stephan.tech/api/contact", {
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
