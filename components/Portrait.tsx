import Image from "next/image";
import type { Lang } from "@/content";

/**
 * Hero görseli: portre kartı.
 * Öncesinde teknik bir şema vardı; kolonda 430x369 kalıyordu (kolonun %62'si)
 * ve metinde zaten geçen bilgileri tekrar ediyordu. Portre kolonu dolduruyor
 * ve sayfayı bir kişiye bağlıyor.
 */
export default function Portrait({ lang = "tr" }: { lang?: Lang }) {
  return (
    <div className="portrait-wrap">
      <span className="portrait-glow" aria-hidden />
      <Image
        src="/portrait.webp"
        alt={
          lang === "tr"
            ? "Bahattin Ercan portresi"
            : "Portrait of Bahattin Ercan"
        }
        width={860}
        height={1147}
        priority
        sizes="(max-width: 1000px) 60vw, 400px"
        className="portrait"
      />
      <span className="portrait-badge">
        <span className="dot" />
        {lang === "tr" ? "İşe açık" : "Open to work"}
      </span>
    </div>
  );
}
