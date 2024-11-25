import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "India Blockchain Week 2023",
    link: "https://www.rubbishbrothers.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Unfold 2023",
    link: "https://www.atlasmassage.ca",
  },
  {
    background: "bg-gray-200",
    imageUrl: "https://images.pexels.com/photos/943101/pexels-photo-943101.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "TechFest IIT Bombay",
    link: "https://www.canadiansecuritysolutions.com",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
