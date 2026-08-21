import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
          borderRadius: "10px",
          color: "#fde047",
          fontSize: "26px",
          fontWeight: "bold",
          boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4)",
        }}
      >
        💃
      </div>
    ),
    { ...size }
  );
}
