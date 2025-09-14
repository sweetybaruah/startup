import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section className="section is-inverse">
      <div className="container">
        <div className="w-layout-grid grid_2-col gap-large">
          <div className="w-form">
            <form
              id="wf-form-contact-form"
              name="wf-form-Contact-Form"
              data-name="Contact Form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="input">
                <label htmlFor="name-3" className="input_label">
                  Name
                </label>
                <input
                  className="input_field margin-bottom_xsmall on-inverse w-input"
                  maxLength="256"
                  name="name-3"
                  data-name="Name 3"
                  placeholder="Your name"
                  type="text"
                  id="name-3"
                />
              </div>
              <div className="input">
                <label htmlFor="email-5" className="input_label">
                  Email
                </label>
                <input
                  className="input_field margin-bottom_xsmall on-inverse w-input"
                  maxLength="256"
                  name="email-5"
                  data-name="Email 5"
                  placeholder="email@website.com"
                  type="email"
                  id="email-5"
                  required=""
                />
              </div>
              <div className="input">
                <label htmlFor="message-6" className="input_label">
                  What’s on your mind?
                </label>
                <textarea
                  id="message-6"
                  name="message-6"
                  maxLength="5000"
                  data-name="Message 6"
                  placeholder="Type your message..."
                  className="input_field input_text-area margin-bottom_small on-inverse w-input"
                ></textarea>
              </div>
              <div className="button-group">
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button on-inverse w-button"
                  value={isSubmitting ? "Sending..." : "Submit"}
                  disabled={isSubmitting}
                />
              </div>
            </form>
            <div className="form_success-message w-form-done">
              <div>Thanks! We’ll reach out soon.</div>
            </div>
            <div className="form_error-message w-form-fail">
              <div className="form_error-message_content">
                <img
                  width=""
                  height=""
                  alt="image of a contact center environment"
                  src="https://cdn.prod.website-files.com/68c66ebd8e19fe35feb92824/68c670f6ac920cf61b2da6af_bc3f653a-6893-4edf-a9f9-926f5f0359f2.avif"
                  loading="lazy"
                  data-aisg-image-id="16cbd5d1-ce9a-4729-bddd-ee43cf5ad009"
                  className="display_inline-block"
                />
                <div className="display_inline-block">
                  Whoops! Double-check and try again.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_04da3743-9ce2-6e2d-ee03-df10a8aa6687-6c55b82b"
            className="w-node-c22a7dd6-4dda-421b-e09a-bf3f7036db9e-feb9283c"
          >
            <h2 className="heading_h2">Let’s build something great</h2>
            <p className="subheading">
              Got a project or question? Reach out and let’s spark your next
              big move. We’re here to help your business grow—no pressure, just
              possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
