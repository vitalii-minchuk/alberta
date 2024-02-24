import { getPlaiceholder } from "plaiceholder";
import { SvgTest } from "./components";
import styles from './styles.module.css'
import Image from "next/image";
import AudioRecorder from "./components/image-upload";

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
    "https://dev.jambo8.com/_next/image?url=https%3A%2F%2Fstage.gis-static.com%2Fgames%2FSpribe%2F8ae9549c6e0e483fb4958cad3c53a568.png&w=384&q=100"
  );
console.log(color)
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
          <AudioRecorder />
    </div>
  )
}
