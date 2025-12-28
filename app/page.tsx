"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              Next.js Application
              <span className="block text-indigo-400">
                Docker • AWS • CI/CD
              </span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed">
              A modern frontend application built using{" "}
              <span className="text-zinc-200 font-medium">Next.js</span>, fully
              containerized with{" "}
              <span className="text-zinc-200 font-medium">Docker</span> and
              prepared for deployment on{" "}
              <span className="text-zinc-200 font-medium">AWS</span> using an
              automated{" "}
              <span className="text-zinc-200 font-medium">CI/CD pipeline</span>.
            </p>

            <div className="flex gap-4 pt-4">
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                Dockerized
              </span>
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                AWS Ready
              </span>
              <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                CI/CD Enabled
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9"
              alt="Cloud infrastructure"
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="border-t border-zinc-800 bg-[#0e0e14]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-3">
          <FeatureCard
            title="Dockerized Development"
            description="The entire application runs inside Docker containers, ensuring consistency across development, testing, and production environments."
            image="https://www.tatvasoft.com/outsourcing/wp-content/uploads/2024/03/docker.jpg"
          />

          <FeatureCard
            title="AWS Deployment (Testing)"
            description="Designed to be deployed on AWS services such as EC2, ECS, or ECR. Production deployment will be integrated next."
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*kejH57bYyFOVtDv8hgSDBA.png"
          />

          <FeatureCard
            title="CI/CD Pipeline"
            description="Automated build, test, and deployment pipeline planned using GitHub Actions to ensure reliable and fast releases."
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*UUFl64BZ-DM07sWLFve3oA.png"
          />
        </div>
      </section>

      {/* S3 Testing Section */}
      <section className="border-t border-zinc-800 bg-[#0b0b0f]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">
              AWS Services Testing
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Test and interact with AWS S3 bucket functionality in real-time
            </p>
          </div>

          <div className="flex justify-center" onClick={() => router.push('/s3-testing')}>
            <div className="max-w-2xl mx-auto group cursor-pointer">
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e14] overflow-hidden transition-all duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/aws-s3.svg"
                    alt="AWS S3 Bucket"
                    fill
                    className="object-contain p-8 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] to-transparent"></div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                      S3 Bucket Testing
                    </h3>
                    <svg
                      className="w-6 h-6 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    Upload and manage images directly to AWS S3. Test cloud storage
                    integration with a modern, intuitive interface.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Upload Files
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      View Gallery
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Real-time Sync
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-500">
        Built with Next.js • Docker • AWS • CI/CD
      </footer>
    </div>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0b0b0f] overflow-hidden transition-all duration-300 hover:border-zinc-700">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}