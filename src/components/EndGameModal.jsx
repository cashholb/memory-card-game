import { motion } from "framer-motion";
import './EndGameModal.css';

const Backdrop = ({children}) => {

  return (
    <motion.div
      className="backdrop"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
    >
      {children}
    </motion.div>
  );
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 15,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
}

const EndGameModal = ({hasWon, score, onBackHome}) => {
  return (
    <Backdrop>
      <motion.div 
        onClick={(e) => e.stopPropagation}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>GAME OVER</h1>
        <p>You {hasWon ? 'won!' : 'lost'}</p>
        <p>Your Score: {score}</p>
        <button onClick={onBackHome}>Back To Home</button>
      </motion.div>
    </Backdrop>
  );
}

export default EndGameModal;