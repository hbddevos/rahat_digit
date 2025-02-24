
import Link from "./Link";

export default function Links() {
  return (
    
    <section className="md:mt-12 md:absolute md:right-4 md:top-32 z-10 text-white top-3 max-sm:py-8">
      <div className="flex md:flex-col gap-y-2  max-sm:justify-center">
        <Link type="WhatsApp" icon="./svgs/whatsapp.svg" />
        <Link type="Instagram" icon="./svgs/instagram.svg" />
        <Link type="TikTok" icon="./svgs/tiktok.svg" />
        <Link type="FaceBook" icon="./svgs/facebook.svg" />
      </div>
    </section>
  );
}
