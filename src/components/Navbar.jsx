import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "nav is-inverse",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div
        data-duration="400"
        data-animation="default"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll="1"
        className="nav_container w-nav"
      >
        <div className="nav_left">
          <a href="#" className="nav_logo w-inline-block">
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
            <div data-brand-name="true" className="paragraph_large margin-bottom_none">
              SyntraPal
            </div>
          </a>
          <nav role="navigation" className="nav_menu w-nav-menu">
            <ul role="list" className="nav_menu-list w-list-unstyled">
              <li className="nav_menu-list-item">
                <div data-delay="0" data-hover="false" className="nav_dropdown-menu w-dropdown">
                  <div className="nav_link on-inverse w-dropdown-toggle">
                    <div>Solutions</div>
                    <div className="nav-caret w-icon-dropdown-toggle"></div>
                  </div>
                  <nav className="mega-nav_dropdown-list w-dropdown-list">
                    <div className="mega-nav_dropdown-list-wrapper">
                      <ul
                        role="list"
                        className="grid_3-col tablet-1-col gap-medium margin-bottom_none w-list-unstyled"
                      >
                        <li
                          id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c1a-4d562d54"
                          className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae4fb-e79ae4e7"
                        >
                          <div className="w-layout-grid grid_3-col tablet-1-col gap-small">
                            <div>
                              <div className="eyebrow">Web Apps</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c25-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae506-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Custom Platforms</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Built-for-you web experiences.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c30-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae511-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Mobile Apps</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Launch-ready, user-friendly apps.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c3b-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae51c-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Integrations</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Sync everything, work smarter.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="eyebrow">Growth Tools</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c4a-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae52b-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Analytics</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Insights that drive results.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c55-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae536-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Automation</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Work less, achieve more.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c60-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae541-e79ae4e7"
                                    >
                                      <div>
                                        <strong>CRM</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Effortless lead management.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <div className="eyebrow">Support</div>
                              <ul role="list" className="mega-nav_list w-list-unstyled">
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c6f-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae550-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Help Center</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Answers at your fingertips.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c7a-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae55b-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Live Chat</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Talk to us instantly.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li className="margin-bottom_none">
                                  <a href="#" className="mega-nav_link-item w-inline-block">
                                    <div className="icon is-medium on-inverse">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                      >
                                        <path
                                          d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div
                                      id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c85-4d562d54"
                                      className="w-node-_2b69830e-abe0-624d-fc30-abbfe79ae566-e79ae4e7"
                                    >
                                      <div>
                                        <strong>Consulting</strong>
                                      </div>
                                      <div className="paragraph_small text-color_secondary">
                                        Guidance from real pros.
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li
                          id="w-node-_7433720f-7db7-ce79-1492-2e74223a9c8b-4d562d54"
                          className="flex_horizontal w-node-_2b69830e-abe0-624d-fc30-abbfe79ae56c-e79ae4e7"
                        >
                          <a
                            href="#"
                            className="card-link is-inverse flex-child_expand w-inline-block"
                          >
                            <div className="card_body">
                              <div className="heading_h3">Grow faster. Stress less.</div>
                              <p className="paragraph_small text-color_inverse-secondary">
                                Unlock your business’s next big win.
                              </p>
                              <div className="margin_top-auto">
                                <div className="button-group">
                                  <div className="text-button is-secondary on-inverse">
                                    <div>Explore</div>
                                    <div className="button_icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="nav_menu-list-item">
                <a href="#" className="nav_link on-inverse w-inline-block">
                  <div>About</div>
                </a>
              </li>
              <li className="nav_menu-list-item">
                <a href="#" className="nav_link on-inverse w-inline-block">
                  <div>Blog</div>
                </a>
              </li>
              <li className="nav_menu-list-item">
                <div data-delay="0" data-hover="false" className="nav_dropdown-menu w-dropdown">
                  <div className="nav_link on-inverse w-dropdown-toggle">
                    <div>Support</div>
                    <div className="nav-caret w-icon-dropdown-toggle"></div>
                  </div>
                  <div className="nav_dropdown-list w-dropdown-list">
                    <div className="nav-menu_dropdown-list-wrapper">
                      <ul
                        role="list"
                        className="flex_vertical margin-bottom_none w-list-unstyled"
                      >
                        <li className="margin-bottom_none">
                          <a href="#" className="nav_dropdown-link w-inline-block">
                            <div className="button_label">Contact</div>
                          </a>
                        </li>
                        <li className="margin-bottom_none">
                          <a href="#" className="nav_dropdown-link w-inline-block">
                            <div className="button_label">Help</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav_right">
          <div className="button-group margin-top_none">
            <a href="#" className="button on-inverse w-inline-block">
              <div className="button_label">Start now</div>
            </a>
          </div>
        </div>
        <div
          className="nav_mobile-menu-button w-nav-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="icon on-inverse">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>
    </div>
  );
};
