"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <div className="py-10">
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          width={1000}
          height={1000}
          className="rounded-md object-contain w-full max-h-[500px]"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>

      {/* 🔥 Horizontal Scroll Thumbnails */}
      <div className="relative my-8">
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {product.images.map((image, idx) => (
            <button
              onClick={() => setActiveImage(image)}
              key={`image-thumbnail-${idx}`}
              className="flex-shrink-0 snap-start"
            >
              <Image
                src={image}
                alt="product thumbnail"
                width={240}
                height={160}
                className={`h-20 w-28 md:h-32 md:w-48 object-cover object-top border rounded-lg transition
            ${activeImage === image
                    ? "border-blue-500 ring-2 ring-blue-300"
                    : "border-neutral-200"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* indicator */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Title + Stack */}
      <div className="flex lg:flex-row justify-between items-center flex-col mt-10">
        <Heading className="font-black mb-2 pb-1">
          {product.title}
        </Heading>

        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs bg-gray-100 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <Paragraph className="max-w-xl mt-4">
          {product.description}
        </Paragraph>
      </div>

      {/* Content */}
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mt-6">
        {product?.content}
      </div>

      {/* CTA */}
      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 rounded-full hover:scale-105 transition bg-gray-800 text-white shadow-lg text-sm font-medium px-4 py-2 mt-8"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  );
};