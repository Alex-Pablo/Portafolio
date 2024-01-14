import  styles from "./titleAnimation.module.css"
import SwitchToggle from "@/components/switch/switchToggle";
export default function TitleAnimation() {
  return (
    <>
        <div className={styles.containerTitleSwitch}>
          <div className={styles.wrapperTitle}>
            <p className={styles.title}>/alex.pablo</p>
          </div>
          <SwitchToggle></SwitchToggle>
        </div>
    </>
  );
}
