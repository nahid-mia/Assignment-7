"use client";

// I used the help of AI for this file

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div style={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <h1>Something went wrong</h1>

                    <p style={{ marginTop: 10 }}>
                        {error?.message}
                    </p>

                    <button
                        onClick={() => reset()}
                        style={{
                            marginTop: 20,
                            padding: "10px 16px",
                            cursor: "pointer"
                        }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}