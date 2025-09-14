import React from "react";

export const PricingSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="header is-align-center">
          <h2 className="heading_h1">Pick your perfect plan</h2>
        </div>
        <ul
          role="list"
          className="grid_4-col gap-small padding_none margin-bottom_none w-list-unstyled"
        >
          <li className="card">
            <div className="card_body is-small">
              <div className="margin_bottom-auto">
                <h3 className="heading_h4">Starter</h3>
                <p>
                  Kick off your ideas. Great for testing and side hustles.
                </p>
                <br />
                <p></p>
              </div>
              <div className="margin-top_small">
                <p className="text-color_secondary margin-bottom_none"> </p>
                <h4 className="heading_h2 margin-bottom_none">$0</h4>
                <p className="text-color_secondary">
                  Totally free, zero worries
                </p>
              </div>
              <div className="button-group is-vertical-stretch">
                <a href="#" className="button is-secondary w-inline-block">
                  <div>Start now</div>
                </a>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_body is-small">
              <div className="margin_bottom-auto">
                <h3 className="heading_h4">Growth</h3>
                <p>Boost your business. Tools for teams on the rise.</p>
                <br />
                <p></p>
              </div>
              <div className="margin-top_small">
                <p className="text-color_secondary margin-bottom_none">
                  Starting at
                </p>
                <h4 className="heading_h2 margin-bottom_none">$19</h4>
                <p className="text-color_secondary">or $199 yearly</p>
              </div>
              <div className="button-group is-vertical-stretch">
                <a href="#" className="button is-secondary w-inline-block">
                  <div>Upgrade</div>
                </a>
              </div>
            </div>
          </li>
          <li className="card is-featured">
            <div className="card_body is-small">
              <div className="margin_bottom-auto">
                <h3 className="heading_h4">Teamwork</h3>
                <p>Work together, move faster. Built for small teams.</p>
              </div>
              <div className="margin-top_small">
                <p className="text-color_secondary margin-bottom_none">
                  Starting at
                </p>
                <h4 className="heading_h2 margin-bottom_none">$29 </h4>
                <p className="text-color_secondary">or $299 yearly</p>
              </div>
              <div className="button-group is-vertical-stretch">
                <a href="#" className="button w-inline-block">
                  <div>Choose team</div>
                </a>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_body is-small">
              <div className="margin_bottom-auto">
                <h3 className="heading_h4">Business</h3>
                <p>Go big. Advanced features and VIP support.</p>
              </div>
              <div className="margin-top_small">
                <p className="text-color_secondary margin-bottom_none">
                  Starting at
                </p>
                <h4 className="heading_h2 margin-bottom_none">$49</h4>
                <p className="text-color_secondary">or $499 yearly</p>
              </div>
              <div className="button-group is-vertical-stretch">
                <a href="#" className="button is-secondary w-inline-block">
                  <div>Go pro</div>
                </a>
              </div>
            </div>
          </li>
          <li
            id="w-node-_30afcc52-40fc-73ac-574c-dd2664bfbefc-6c527ca4"
            className="card w-node-_549c9647-db69-cec6-051d-a2dc118fe556-feb9283c"
          >
            <div className="card_body">
              <div className="flex_horizontal is-space-between tablet-vertical gap-small is-y-bottom">
                <div className="w-layout-hflex flex_horizontal gap-xxsmall tablet-vertical">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 12C15.134 12 12 15.134 12 19C12 15.134 8.86599 12 5 12C8.86599 12 12 8.86599 12 5C12 8.86599 15.134 12 19 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 16L5.5 18.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M8 8L5.5 5.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M16 16L18.5 18.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M16 8L18.5 5.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="max-width_medium">
                    <h3 className="heading_h4">Enterprise</h3>
                    <p className="margin-bottom_none">
                      Custom plans, white-glove support, and onboarding.
                    </p>
                    <br />
                    <p></p>
                  </div>
                </div>
                <div className="button-group is-vertical-stretch">
                  <a href="#" className="button is-secondary w-inline-block">
                    <div>Contact</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
