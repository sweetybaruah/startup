import React from "react";

export const Footer = () => {
  return (
    <footer className="footer is-inverse">
      <div className="container">
        <div className="w-layout-grid grid_2-col mobile-l-1-col gap-medium">
          <div
            id="w-node-eb280a5f-22b8-2fbd-d63f-a45e5168e138-5168e135"
            className="flex_horizontal flex_vertical is-space-between is-x-left gap-small w-node-_6c8ccdb1-1a72-35e9-e287-a7861029430d-1029430a"
          >
            <ul role="list" className="margin-bottom_small w-list-unstyled">
              <li>
                <a href="#" className="footer_link on-inverse w-inline-block">
                  <div>hello@syntrapal.com</div>
                </a>
              </li>
              <li>
                <a href="#" className="footer_link on-inverse w-inline-block">
                  <div>Dribbble</div>
                </a>
              </li>
              <li>
                <a href="#" className="footer_link on-inverse w-inline-block">
                  <div>LinkedIn</div>
                </a>
              </li>
            </ul>
            <a href="#" className="logo w-inline-block">
              <div className="nav_logo-icon">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 33 33"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                data-brand-name="true"
                className="paragraph_xlarge margin-bottom_none text_all-caps"
              >
                SyntraPal
              </div>
            </a>
          </div>
          <div
            id="w-node-eb280a5f-22b8-2fbd-d63f-a45e5168e14a-5168e135"
            className="flex_vertical w-node-_6c8ccdb1-1a72-35e9-e287-a78610294321-1029430a"
          >
            <h2 className="heading_h3">Stay connected</h2>
            <p className="margin-bottom_xsmall">
              Get tips, updates, and growth hacks. Zero spam.
            </p>
            <div className="margin-bottom_none width_100percent margin_top-auto w-form">
              <form
                id="wf-form-Subscribe"
                name="wf-form-Subscribe"
                data-name="Subscribe"
                className="flex_horizontal gap-xsmall flex_vertical_mobile-l"
              >
                <div className="input margin-bottom_none flex-child_expand">
                  <label htmlFor="subscribe-email-2" className="input_label screen-reader">
                    Email
                  </label>
                  <input
                    className="input_field on-inverse w-input"
                    maxLength="256"
                    name="email-2"
                    data-name="Email 2"
                    placeholder="Email"
                    type="email"
                    id="subscribe-email"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  role="button"
                  className="button on-inverse w-button"
                  value="Subscribe"
                />
              </form>
              <p className="paragraph_small margin-top_xsmall margin-bottom_none">
                Read our
                <a
                  href="#"
                  className="text-link is-secondary text-span_padding on-inverse"
                >
                  policy
                </a>
                .
              </p>
              <div className="footer_form_success-message w-form-done">
                <div>You’re in! Growth awaits.</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Try again.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider margin-top_small margin-bottom_small"></div>
        <div className="footer_bottom">
          <div className="text-color_secondary">
            © 2025 SyntraPal. All rights reserved.
          </div>
          <div className="text-color_secondary">Made by Taylor Brooks</div>
        </div>
      </div>
    </footer>
  );
};
