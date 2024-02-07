import { getPlaiceholder } from "plaiceholder";
import { SvgTest } from "./components";
import styles from './styles.module.css'
import Image from "next/image";

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default async function ImgTestPage() {
  const { color, img } = await getImage(
    "https://plus.unsplash.com/premium_photo-1705317716147-9d8f7ab2ad69?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  return (
    <div className={styles.wrapper}>
        <SvgTest />
        <Image
            {...img}
            alt="Snowy mountain peaks"
            title="Photo from Unsplash"
            width={200}
            height={200}
          />
          <div style={{height: '200px', width: '200px', backgroundColor: color.hex}} />
    </div>
  )
}
