import Image from "next/image"

import { InstagramIcon } from "@/assets/svg"
import url2 from '../../../../../public/social_icon.svg'
import styles from './styles.module.css'

export const SvgTest = () => {
  return (
    <div className={styles.wrapper}>
    <InstagramIcon className={styles.icon} />
    <Image src={url2} alt='icon' width={24} height={24} className={styles.imgIcon} />
    </div>
  )
}
