export default function LoadingSpinner({ styles }: { styles?: string }) {
  return (
    <div className={` ${styles}`}>
      <div className="custom-loader"></div>
    </div>
  );
}
