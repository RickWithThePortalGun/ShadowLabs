import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-bold text-[23px] text-[#b0b0b0] leading-32">
      {text}
    </p>
  </div>
);

export default StartSteps;
