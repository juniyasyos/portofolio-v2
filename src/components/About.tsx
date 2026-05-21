"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { siteName } from "@/constants/site";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}

      </div>

      <div className="max-w-5xl space-y-12">

        {/* Hero / Hook */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-sm italic text-neutral-700 leading-relaxed">
            “Bukan sekadar membuat sistem berjalan, tapi memastikan tetap stabil,
            terstruktur, dan siap berkembang.”
          </p>

          <Paragraph className="text-neutral-600">
            Saya <span className="font-medium">{siteName}</span>, seorang Software Engineer
            yang fokus pada <span className="font-medium">frontend</span>,{" "}
            <span className="font-medium">backend</span>,{" "}
            <span className="font-medium">system design</span>, dan{" "}
            <span className="font-medium">arsitektur aplikasi</span>.
          </Paragraph>
        </div>

        {/* What I Do */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border hover:shadow-sm transition">
            <p className="font-medium">Frontend & Backend</p>
            <p className="text-sm text-neutral-500">UI/UX, logic, & data flow</p>
          </div>
          <div className="p-4 rounded-xl border hover:shadow-sm transition">
            <p className="font-medium">System Design</p>
            <p className="text-sm text-neutral-500">struktur & arsitektur</p>
          </div>
          <div className="p-4 rounded-xl border hover:shadow-sm transition">
            <p className="font-medium">Cloud</p>
            <p className="text-sm text-neutral-500">deployment & scaling</p>
          </div>
          <div className="p-4 rounded-xl border hover:shadow-sm transition">
            <p className="font-medium">Apps</p>
            <p className="text-sm text-neutral-500">web, mobile, desktop</p>
          </div>
        </div>

        {/* How I Work */}
        <div className="space-y-5 max-w-3xl">
          <Paragraph>
            Dalam setiap project, saya tidak hanya fokus pada fitur yang berjalan,
            tapi bagaimana sistem tersebut disusun. Mulai dari{" "}
            <span className="font-medium">struktur data</span>,{" "}
            <span className="font-medium">alur logika</span>, sampai bagaimana aplikasi
            akan berkembang ke depannya.
          </Paragraph>

          <Paragraph>
            Bagi saya, software yang baik bukan yang cepat selesai,
            tapi yang tetap <span className="font-medium">stabil saat digunakan</span>{" "}
            dan tidak menyulitkan ketika harus diubah atau dikembangkan.
          </Paragraph>
        </div>

        {/* Proof / Experience */}
        <div className="space-y-5 max-w-3xl">
          <Paragraph>
            Dalam beberapa project, saya terbiasa menangani lebih dari satu tanggung jawab,
            mulai dari pengembangan sistem, koordinasi, hingga memastikan implementasi berjalan dengan baik.
          </Paragraph>

          <Paragraph>
            Pengalaman tersebut membuat saya lebih berhati-hati dalam membangun sistem,
            terutama dalam hal <span className="font-medium">struktur</span> dan{" "}
            <span className="font-medium">keberlanjutan jangka panjang</span>.
          </Paragraph>

          <Paragraph>
            Dari situ saya melihat langsung bagaimana sistem yang tidak terstruktur
            akan menyulitkan di kemudian hari.
            Sejak itu, saya lebih memilih membangun sesuatu dengan dasar yang kuat,
            bukan sekadar cepat selesai.
          </Paragraph>
        </div>

        {/* Visual Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Di Balik Layar</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="/images/about/meeting.jpg"
              className="rounded-xl object-cover w-full h-48"
            />
            <img
              src="/images/about/presentation.jpg"
              className="rounded-xl object-cover w-full h-48"
            />
            <img
              src="/images/about/teamwork.jpg"
              className="rounded-xl object-cover w-full h-48"
            />
          </div>

          <Paragraph className="text-sm text-neutral-500 max-w-2xl">
            Terlibat dalam diskusi, presentasi, dan kerja tim untuk memastikan
            solusi yang dibangun tidak hanya benar secara teknis,
            tetapi juga dipahami dan benar-benar digunakan.
          </Paragraph>
        </div>

        {/* Current Focus */}
        <div className="space-y-5 max-w-3xl">
          <Paragraph>
            Saat ini saya lebih memilih fokus pada pekerjaan yang jelas arahnya.
            Membangun sistem yang benar-benar selesai, punya nilai,
            dan bisa digunakan dalam jangka panjang.
          </Paragraph>
        </div>

        {/* Closing */}
        <div className="space-y-5 max-w-3xl">
          <Paragraph>
            Website ini menjadi tempat saya menyimpan proses tersebut.
            Hasil kerja, eksperimen, dan berbagai sistem yang pernah dibangun.
          </Paragraph>

          <Paragraph>
            Jika ada yang ingin didiskusikan atau dibangun bersama,
            saya terbuka.
          </Paragraph>
        </div>

      </div>
    </div>
  );
}
