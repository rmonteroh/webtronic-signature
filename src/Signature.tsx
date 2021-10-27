/* eslint-disable react/jsx-no-target-blank */
import { PhotoSignatureProps } from "./App";
import Logo from "./assets/wlogo.png";

const Signature = (props: PhotoSignatureProps) => {
  const logo =
    "https://storage.googleapis.com/web-landing-cdn/icons/webtronic-logo.png";
  return (
    <div id="signatureId">
      <table
        cellPadding={0}
        cellSpacing={0}
        className={"signature"}
        style={{
          height: 170,
          maxWidth: "100%",
          whiteSpace: "nowrap",
          background: "#FFFFFF",
        }}
      >
        <tbody>
          <tr>
            <td>
              <img
                style={{ width: 150 }}
                src={props.photo === "no-photo" ? logo : props.photo}
                alt={""}
              />
            </td>
            <td>
              <div
                style={{
                  width: 0,
                  height: "100%",
                  borderRight: "1px solid #fcddde",
                  marginRight: 9,
                  marginLeft: 10,
                }}
              />
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    <span style={{ fontWeight: 900, color: "#ff7d81" }}>
                      <span>{props.fullName}</span>
                      <br />
                      <span
                        style={{
                          fontWeight: 400,
                          color: "#ff7d81",
                          lineHeight: "30px",
                        }}
                      >
                        {props.position}
                      </span>
                    </span>
                  </td>
                </tr>
                {props.address && props.address !== "" && (
                  <tr>
                    <td>
                      <span
                        style={{
                          fontWeight: 900,
                          color: "#ff7d81",
                          lineHeight: "20px",
                        }}
                      >
                        a:
                      </span>
                      <a
                        href={`http://maps.google.com/maps?q=${encodeURIComponent(props.address)}`}
                        target="_blank"
                        style={{
                          fontSize: 14,
                          textDecoration: "none",
                          color: "#000000bd",
                        }}
                      >
                        {" "}
                        {props.address}
                      </a>
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    <span
                      style={{
                        fontWeight: 900,
                        color: "#ff7d81",
                        lineHeight: "20px",
                      }}
                    >
                      e:
                    </span>
                    <a
                      href={`mailto:${props.email}`}
                      style={{
                        fontSize: 14,
                        textDecoration: "none",
                        color: "#000000bd",
                      }}
                    >
                      {" "}
                      {props.email}
                    </a>
                  </td>
                </tr>
                {props.site && props.site !== "" && (
                  <tr>
                    <td>
                      <span
                        style={{
                          fontWeight: 900,
                          color: "#ff7d81",
                          lineHeight: "20px",
                        }}
                      >
                        w:
                      </span>
                      <a
                        href={props.site}
                        target="_blank"
                        style={{
                          fontSize: 14,
                          textDecoration: "none",
                          color: "#000000bd",
                        }}
                      >
                        {" "}
                        {props.site}
                      </a>
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    <span
                      style={{
                        fontWeight: 900,
                        color: "#ff7d81",
                        lineHeight: "20px",
                      }}
                    >
                      m:
                    </span>
                    <a
                      href={`tel:${props.phone}`}
                      style={{
                        fontSize: 14,
                        textDecoration: "none",
                        color: "#000000bd",
                      }}
                    >
                      {" "}
                      {props.phone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <div style={{ marginTop: 10 }}>
                      {props.facebookUrl && props.facebookUrl !== "" && (
                        <a style={{ marginRight: 10, height: 20 }} href={props.facebookUrl}>
                          <img
                            height="20"
                            src="https://storage.googleapis.com/proflyt-template-assets/facebook.png"
                            alt="Facebook"
                          />
                        </a>
                      )}
                      {props.linkedinUrl && props.linkedinUrl !== "" && (
                        <a style={{ marginRight: 10, height: 20 }} href={props.linkedinUrl}>
                          <img
                            height="20"
                            src="https://storage.googleapis.com/proflyt-template-assets/linkedin.png"
                            alt="Linkedin"
                          />
                        </a>
                      )}
                      {props.instagramUrl && props.instagramUrl !== "" && (
                        <a
                          style={{ marginRight: 10, height: 20 }}
                          href={props.instagramUrl}
                        >
                          <img
                            height="22"
                            src="https://storage.googleapis.com/proflyt-template-assets/instagram.png"
                            alt="Instagram"
                          />
                        </a>
                      )}
                      {props.twitterUrl && props.twitterUrl !== "" && (
                        <a style={{ marginRight: 10, height: 20 }} href={props.twitterUrl}>
                          <img
                            height="20"
                            src="https://storage.googleapis.com/proflyt-template-assets/twitter.png"
                            alt="Twitter"
                          />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Signature;
