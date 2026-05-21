import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Halo, saya Ilyas
      </Heading>

      <Paragraph className="max-w-xl mt-4">
        Saya lebih sering bekerja di balik sistem seperti merancang arsitektur,
        merapikan alur yang kompleks, dan membangun sistem yang siap digunakan dalam operasional nyata.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Project yang saya kerjakan
      </Heading>

      <Products />
      <TechStack />
    </Container>
  );
}
