tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        accent: "#EC4899",
        dark: "#0F172A",
        "dark-light": "#1E293B",
        "dark-lighter": "#334155",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 8s ease-in-out infinite",
        "float-3": "float-3 7s ease-in-out infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
        "particle-float": "particle-float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" },
          to: { boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(5deg)" },
          "66%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(-5deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-15px) rotate(3deg)" },
          "75%": { transform: "translateY(-20px) rotate(-4deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "particle-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.3",
          },
          "33%": {
            transform: "translateY(-30px) translateX(10px)",
            opacity: "0.8",
          },
          "66%": {
            transform: "translateY(-10px) translateX(-5px)",
            opacity: "0.5",
          },
        },
      },
    },
  },
};
