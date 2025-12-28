import Link from "next/link";
import Image from "next/image";

export default function S3TestingPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-[#0e0e14]">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <svg
              className="w-8 h-8 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">AWS S3 Bucket Testing</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Upload and manage your images in the cloud. Choose an action below
            to get started.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Upload Card */}
          <Link href="/s3-testing/upload">
            <div className="group cursor-pointer">
              <div className="rounded-2xl border border-zinc-800 bg-[#0e0e14] overflow-hidden transition-all duration-300 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-indigo-400 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent"></div>
                </div>

                <div className="p-8 space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                    Upload Images
                  </h2>
                  <p className="text-zinc-400">
                    Upload your images directly to AWS S3 bucket with a simple
                    drag-and-drop interface or file selection.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 font-medium">
                    Start Uploading
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* View Gallery Card */}
          <Link href="/s3-testing/gallery">
            <div className="group cursor-pointer">
              <div className="rounded-2xl border border-zinc-800 bg-[#0e0e14] overflow-hidden transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-purple-400 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent"></div>
                </div>

                <div className="p-8 space-y-4">
                  <h2 className="text-2xl font-semibold text-zinc-100 group-hover:text-purple-400 transition-colors">
                    View Gallery
                  </h2>
                  <p className="text-zinc-400">
                    Browse and manage all your uploaded images from the S3
                    bucket in a beautiful gallery view.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 font-medium">
                    Open Gallery
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="rounded-xl border border-zinc-800 bg-[#0e0e14] p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                  About This Demo
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  This is a live demonstration of AWS S3 integration with Next.js.
                  All images are uploaded to a real S3 bucket using secure AWS
                  credentials stored in environment variables. The application
                  uses the AWS SDK v3 for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}