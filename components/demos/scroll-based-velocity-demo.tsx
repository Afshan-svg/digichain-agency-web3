import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Buzzness Marketing Studio"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-[#dbd704] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />

  );
}
