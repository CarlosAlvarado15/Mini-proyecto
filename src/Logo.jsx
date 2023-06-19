import React from "react";

export default function Logo(props) {
  let lupa = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="red"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
               
    </svg>
  );
  return (
    <div>
      <div
        className=""
        style={{
          position: "sticky",
          top: "0",
          zIndex: "5",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src="src\img\logo.png" alt="logo" />
        </div>
        <div
          className="logo"
          style={{
            width: "25rem",
            cursor: "pointer",
            outline: "1px solid brown",
          }}
        >
          <input
            type="search"
            placeholder="Add location"
            style={{ border: "none" }}
            /* onClick={} */
            className=""
          />
          <input
            type="search"
            placeholder="Add guest"
            style={{ border: "none" }}
            /* onClick={} */
            className=""
          />
          <button className="input-group-text h-100" /* onClick={} */>
            {lupa}
          </button>
        </div>
      </div>
    </div>
  );
}
