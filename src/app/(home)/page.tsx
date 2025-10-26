"use client";

import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function WhyTopineur() {
  return (
    <div className="max-w-4xl w-full py-10 px-8">
      <h2 className="text-3xl mb-4 font-bold text-orange-400 dark:text-orange-400 text-center">
        Why Topineur?
      </h2>
      <ul className="grid md:grid-cols-3 gap-6 text-center">
        <li className="bg-slate-700 p-4 rounded-xl">
          <span className="text-xl font-semibold text-orange-400">
            Simple Syntax
          </span>
          <p className="text-gray-300">
            Easy to read and write, designed for clarity.
          </p>
        </li>
        <li className="bg-slate-700 p-4 rounded-xl">
          <span className="text-xl font-semibold text-orange-400">
            LLVM Powered
          </span>
          <p className="text-gray-300">
            Built on LLVM for fast and reliable code generation.
          </p>
        </li>
        <li className="bg-slate-700 p-4 rounded-xl">
          <span className="text-xl font-semibold text-orange-400">
            Object-Oriented
          </span>
          <p className="text-gray-300">
            Everything is an object. <br />
            Topineur is a compiled language with a consistent object type
            system.
          </p>
        </li>
      </ul>
    </div>
  );
}

function InstallTabs() {
  const options = [
    {
      label: "Install via curl",
      code: `# Install Topineur with Curl\n$ curl -sSL https://topineur.org/install.sh | bash`,
    },
    {
      label: "Install via wget",
      code: `# Install Topineur with Wget\n$ wget -qO- https://topineur.org/install.sh | bash`,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="max-w-4xl w-full py-10 px-4">
      <h2 className="text-3xl mb-4 font-bold text-orange-400 dark:text-orange-400 text-center">
        Getting Started
      </h2>
      <div className="max-w-4xl w-full bg-slate-700 rounded-lg p-6 text-center">
        <div className="flex gap-2 mb-2">
          {options.map((opt, idx) => (
            <button
              key={opt.label}
              className={`px-3 py-1 rounded font-semibold transition ${selected === idx ? "bg-orange-500/80 text-white" : "bg-slate-400/30 hover:bg-orange-400/40 hover:text-blue-200 text-blue-300"}`}
              onClick={() => setSelected(idx)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <pre className="bg-gray-900 rounded p-4 text-left text-sm overflow-x-auto mb-4">
          <code className="text-green-400 whitespace-pre-line">
            {options[selected].code}
          </code>
        </pre>
        <Link
          href="/docs/getting-started"
          className="text-orange-400 underline font-semibold"
        >
          Full Installation Guide
        </Link>
      </div>
    </div>
  );
}

function TheTeam() {
  return (
    <div className="max-w-4xl w-full py-10">
      <h2 className="text-3xl mb-4 font-bold text-orange-400 dark:text-orange-400 text-center">
        Meet the Team
      </h2>
      <div
        className="justify-center items-center gap-6
        md:grid md:grid-cols-7
        grid grid-cols-2
      "
      >
        <Link
          href="https://github.com/skignes"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/116216779?v=4"
              alt="Skignes"
            />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">Skignes</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/lg-epitech"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/146029080?v=4"
              alt="Lg-epitech"
            />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">
            Lg-epitech
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/WilliamJlvt"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/80533655?v=4"
              alt="WilliamJlvt"
            />
            <AvatarFallback>WJ</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">
            WilliamJlvt
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/Nerzouille"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/94183376?v=4"
              alt="Nerzouille"
            />
            <AvatarFallback>NZ</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">
            Nerzouille
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/FLOWleplusbeau"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/115529746?v=4"
              alt="FLOWleplusbeau"
            />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">
            FLOWleplusbeau
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/SilasPaquet"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/146726411?v=4"
              alt="SilasPaquet"
            />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">
            SilasPaquet
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
        <Link
          href="https://github.com/Axeldld"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/146740481?v=4"
              alt="Axeldld"
            />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="mt-2 text-orange-500/80 font-semibold">Axeldld</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Developer
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-orange-200/50 to-orange-300/50 text-gray-900 dark:from-orange-950 dark:via-gray-800 dark:to-gray-700 dark:text-white">
      <div className="w-full text-center relative py-50 px-8">
        <h1 className="text-5xl font-extrabold">
          Welcome to <span className="text-orange-400">Topineur</span>
        </h1>
        <p className="text-lg mb-8 mt-4 tracking-tight">
          Topineur is a modern programming language designed for my happiness.
          <br />
          Explore the documentation to get started, learn the syntax, and see
          some examples.
        </p>
        <Link
          href="/docs"
          className="bg-orange-400 hover:bg-orange-500 text-white text-md font-semibold py-3 px-5 rounded-xl transition-colors duration-200"
        >
          Read the Docs
        </Link>
      </div>

      <WhyTopineur />
      <InstallTabs />
      <TheTeam />
    </div>
  );
}
