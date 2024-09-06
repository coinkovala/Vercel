'use client'

import { useState, useRef } from 'react'
import { cn } from "@/lib/utils";
import Link from 'next/link';
import HyperText from "@/components/magicui/hyper-text";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Incredible tool! It has revolutionized my workflow.",
    img: "https://avatar.vercel.sh/jane",
  },
];

const firstRow = reviews.slice(0, 2);
const secondRow = reviews.slice(2, 4);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string; }) => {
  return (
    <figure className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    )}>
      <div className="flex flex-row items-center gap-2">
        <Image 
          className="rounded-full" 
          width={32} 
          height={32} 
          alt="" 
          src={img} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const containerRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const registerButtonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting:', { name, email }) // Debug log

    // Supabase kodu yerine basit bir alert kullanabiliriz
    alert(`User registered: ${name}, ${email}`)
    setName('')
    setEmail('')
  }

  return (
    <div ref={containerRef} className="relative flex min-h-screen flex-col items-center justify-start py-4 px-4 bg-white overflow-hidden">
      <div className="w-full flex justify-between items-center mb-8 z-10">
        <div className="flex space-x-4">
          
          <Link href="/bento">
            <button className="bg-black text-white font-bold py-2 px-4 rounded h-10 shadow-2xl hover:bg-gray-800 transition-colors">
              View Bento Grid
            </button>
          </Link>
          <Link href="/cancel-subscription">
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded h-10 shadow-2xl hover:bg-red-700 transition-colors">
              Cancel Subscription
            </button>
          </Link>
        </div>
      </div>
      
      <div className="z-10 flex min-h-[8rem] items-center justify-center mb-4">
        <HyperText
          className="text-4xl font-bold text-black"
          text="User Registration"
          duration={1500}
          animateOnLoad={true}
        />
      </div>
      
      <div className="w-full max-w-2xl mb-8 text-center z-10">
        <p className="text-lg">
          Join our community to unlock exclusive features and personalized recommendations.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm mb-8 z-10">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <ShimmerButton ref={registerButtonRef} type="submit" className="shadow-2xl w-full h-10">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
              Register
            </span>
          </ShimmerButton>
        </div>
      </form>
      
      {/* Sol taraftaki beam'ler */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nameInputRef}
        toRef={registerButtonRef}
        delay={0}
        curvature={200}
        startXOffset={-1000}
        startYOffset={10}
        endXOffset={-180}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={emailInputRef}
        toRef={registerButtonRef}
        delay={0.2}
        curvature={250}
        startXOffset={-1000}
        startYOffset={10}
        endXOffset={-190}
        endYOffset={-10}
      />
      
      {/* Sağ taraftaki beam'ler */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nameInputRef}
        toRef={registerButtonRef}
        delay={0}
        curvature={200}
        startXOffset={1000}
        startYOffset={10}
        endXOffset={180}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={emailInputRef}
        toRef={registerButtonRef}
        delay={0.2}
        curvature={250}
        startXOffset={1000}
        startYOffset={10}
        endXOffset={190}
        endYOffset={-10}
      />
      
      <MarqueeDemo />
    </div>
  )
}
