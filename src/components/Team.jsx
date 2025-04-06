import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>

        <div
          id="row" //teams css ovrrides here in main code
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "stretch", // make all items same height
            flexWrap: "nowrap",
            width: "100%",
            gap: "20px",
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  style={{
                    flex: "0 0 18%",
                    maxWidth: "18%",
                    boxSizing: "border-box",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#f9f9f9",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                >
                  <div style={{ flexGrow: 1 }}>
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img"
                      style={{
                        width: "100%",
                        height: "220px", // fixed height for all images
                        objectFit: "cover", // crop to fit nicely
                        borderRadius: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    <div className="caption">
                      <h4 style={{ margin: "10px 0 5px" }}>{d.name}</h4>
                      <p style={{ margin: 0 }}>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
