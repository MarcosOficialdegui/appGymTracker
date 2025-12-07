import { Check } from "lucide-react";

interface CustomToastProps {
  message: string;
}

export const CustomToast = ({ message }: CustomToastProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 16px",
        background: "rgba(255,255,255,0.95)",
        color: "#111", 
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "15px",
        border: "1px solid #ddd", 
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Check size={18} color="#111" strokeWidth={2.5} />
      {message}
    </div>
  );
};
