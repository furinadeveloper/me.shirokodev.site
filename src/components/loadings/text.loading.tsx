export default function TextLoading() {
  return (
    <div className="w-full space-y-2.5 animate-pulse max-w-lg">
      <div className="flex items-center w-full">
        <div className="h-2.5rounded-full bg-dark-main w-32"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-24"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 rounded-full bg-dark-main w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[400px]">
        <div className="h-2.5 rounded-full bg-dark-main-100 w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main w-80"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[480px]">
        <div className="h-2.5 ms-2 rounded-full bg-dark-main w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-24"></div>
      </div>
      <div className="flex items-center w-full max-w-[440px]">
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-32"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-24"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main w-full"></div>
      </div>
      <div className="flex items-center w-full max-w-[360px]">
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main w-80"></div>
        <div className="h-2.5 ms-2 rounded-full bg-dark-main-100 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
