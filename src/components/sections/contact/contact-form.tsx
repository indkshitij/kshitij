"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useSound } from "@/hooks/use-sound";
import { SOUNDS } from "@/lib/sounds";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validation/contact.schema";

import FloatingInput from "@/components/atoms/input-fields/floating-input";
import FloatingTextarea from "@/components/atoms/input-fields/floating-textarea";
import FloatingPhoneInput from "@/components/atoms/input-fields/floating-phone-input";
import MessageSendButton from "@/components/sections/contact/message-send-button";
import { useState } from "react";

export default function ContactForm() {
  const playTyping = useSound(SOUNDS.typing);
  const playPing = useSound(SOUNDS.ping);
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = async (data: ContactFormData) => {
    playPing();
    setSuccess(false); // reset before request

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent. I will respond shortly.");

      setSuccess(true); // 🎉 trigger confetti
      reset();

      // optional: reset success after animation
      setTimeout(() => setSuccess(false), 1500);
    } catch {
      toast.error("Unable to send your message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="group">
      <div className="space-y-10 sm:space-y-16 px-3 sm:px-10 pt-10 sm:pt-8 mx-auto">
        {/* Name */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Your Name"
              disabled={isSubmitting}
              error={errors.name?.message}
              onChange={(e) => {
                playTyping();
                field.onChange(e);
              }}
              required
            />
          )}
        />

        <div className="grid sm:grid-cols-5 gap-6">
          {/* Email */}
          <div className="col-span-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FloatingInput
                  {...field}
                  label="Email"
                  //   type="email"
                  disabled={isSubmitting}
                  error={errors.email?.message}
                  onChange={(e) => {
                    playTyping();
                    field.onChange(e);
                  }}
                  required
                />
              )}
            />
          </div>

          {/* Phone */}
          <div className="col-span-2">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <FloatingPhoneInput
                  {...field}
                  label={"Mobile Number"}
                  disabled={isSubmitting}
                  error={errors.phone?.message}
                  onChange={(value) => field.onChange(value || "")}
                />
              )}
            />
          </div>
        </div>

        {/* Subject */}
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Subject"
              disabled={isSubmitting}
              error={errors.subject?.message}
              onChange={(e) => {
                playTyping();
                field.onChange(e);
              }}
              required
            />
          )}
        />

        {/* Message */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <FloatingTextarea
              {...field}
              label="Write your message..."
              disabled={isSubmitting}
              error={errors.message?.message}
              onChange={(e) => {
                playTyping();
                field.onChange(e);
              }}
              required
            />
          )}
        />
      </div>

      {/* Button */}
      <div className="border-t mt-4 sm:mt-10 border-line flex justify-center py-2.5 sm:py-5">
        <MessageSendButton loading={isSubmitting} success={success} />
      </div>
    </form>
  );
}
