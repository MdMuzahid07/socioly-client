export default function LoadingSpinner({ styles }: { styles?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${styles || "h-[200px] w-full"}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute h-12 w-12 animate-ping rounded-full bg-primary/20 duration-1000"></div>
        {/* Middle glass ring */}
        <div className="absolute h-10 w-10 rounded-full border-2 border-primary/30 bg-primary/5 backdrop-blur-sm"></div>
        {/* Inner rotating spinner */}
        <div className="custom-loader relative z-10"></div>
      </div>
    </div>
  );
}
