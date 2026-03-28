export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-primary-teal blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-accent-pink blur-3xl" />
    </div>
  );
}
