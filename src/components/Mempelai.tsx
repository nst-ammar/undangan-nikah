import { IMAGES } from "../data";

interface ProfileProps {
  image: string;
  alt: string;
  role: string;
  name: string;
  parents: [string, string];
  childOrder: string;
  instagram: string;
}

function ProfileCard({ image, alt, role, name, parents, childOrder, instagram }: ProfileProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="w-44 h-56 rounded-full overflow-hidden shadow-md mb-space-md relative">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={alt}
          src={image}
        />
      </div>
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold mb-1">
        {role}
      </span>
      <h3 className="font-headline-md text-headline-md text-navy mb-2">{name}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md max-w-xs">
        {childOrder} dari pasangan
        <br />
        <strong className="text-on-surface">{parents[0]}</strong> &amp;{" "}
        <strong className="text-on-surface">{parents[1]}</strong>
      </p>
      <a
        className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high text-action hover:bg-action hover:text-white transition-colors font-label-sm text-label-sm"
        href="https://instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[16px]">photo_camera</span>
        <span>{instagram}</span>
      </a>
    </div>
  );
}

export default function Mempelai() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="mempelai">
      <div className="max-w-6xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Kedua Mempelai
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Assalamu’alaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan
            putra-putri kami:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg items-center">
          <ProfileCard
            image={IMAGES.groom}
            alt="Potret mempelai pria muslim Fulan Pratama dalam busana koko tradisional"
            role="Mempelai Pria"
            name="Fulan Pratama, S.T."
            childOrder="Putra pertama"
            parents={["Bapak Bambang Hariyanto", "Ibu Sri Wahyuni"]}
            instagram="@fulan.pratama"
          />
          <ProfileCard
            image={IMAGES.bride}
            alt="Potret mempelai wanita muslimah Fulana Larasati berhijab anggun"
            role="Mempelai Wanita"
            name="Fulana Larasati, S.Ds."
            childOrder="Putri bungsu"
            parents={["Bapak Hendra Kusuma", "Ibu Maya Anggraini"]}
            instagram="@fulana.larasati"
          />
        </div>
      </div>
    </section>
  );
}
