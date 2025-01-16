import { motion } from "framer-motion";

export const MyName = ({ isFocus }: { isFocus: boolean }) => {
  return (
    isFocus && (
      <svg
        strokeWidth={0.5}
        viewBox="0 0 16.2 7.3"
        fill="none"
        stroke={"currentColor"}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          d="M0.5 0.5 H2.5 C 2.5 0.5, 3.5 0.5, 1.5 3.5"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          }}
          d="M4.1 0.25 V4.25"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.4,
          }}
          d="M1.25 5.5 C 1.25 5.5, 1.25 5, 1.75 5 H3.75 C 3.75 5, 4.25 5, 4.25 5.5 V 6.25 C 4.25 6.25, 4.25 6.75, 3.75 6.75 H1.75 C 1.75 6.75, 1.25 6.75, 1.25 6.25 V5.5"
        ></motion.path>
        <motion.path
          d="M5.5 0.5 H7.5 C 7.5 0.5, 8.5 0.5, 6.5 3.5"
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.6,
          }}
        ></motion.path>
        <motion.path
          d="M9.1 0.25 V4.25 V2.25 H10.35 H9.1"
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.8,
          }}
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 1,
          }}
          d="M6.75 6 C 6.75 6, 6.75 5, 7.75 5 C 7.75 5, 8.75 5, 8.75 6 C 8.75 6, 8.75 7, 7.75 7 C 7.75 7, 6.75 7, 6.75 6"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 1.2,
          }}
          d="M12.25 0.75 C 12.25 0.75, 12.25 0.25, 12.75 0.25 H14.75 C 14.75 0.25, 15.25 0.25, 15.25 0.75 V 1.5 C 15.25 1.5, 15.25 2, 14.75 2 H12.75 C 12.75 2, 12.25 2, 12.25 1.5 V0.75"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 1.4,
          }}
          d="M11.6 3.55 H16 H13.8 V4.9"
        ></motion.path>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isFocus && { pathLength: 1.5 }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 1.6,
          }}
          d="M12.1 5 V5.5 C 12.1 6.5, 12.1 6.5, 14.1 6.5 H15.4"
        ></motion.path>
      </svg>
    )
  );
};

// 원본
// export const Word = () => {
//   return (
//     <svg strokeWidth={0.5} viewBox="0 0 30 10" fill="none" stroke="black">
//       <defs>
//         <path d="M0.5 0.5 H2.5 C 2.5 0.5, 3.5 0.5, 1.5 3.5" id="ㄱ"></path>
//         <path d="M4.1 0.25 V4.25" id="ㅣ"></path>
//         <path
//           d="M1.25 5.5 C 1.25 5.5, 1.25 5, 1.75 5 H3.75 C 3.75 5, 4.25 5, 4.25 5.5 V 6.25 C 4.25 6.25, 4.25 6.75, 3.75 6.75 H1.75 C 1.75 6.75, 1.25 6.75, 1.25 6.25 V5.5"
//           id="ㅁ"
//         ></path>
//         <path d="M5.5 0.5 H7.5 C 7.5 0.5, 8.5 0.5, 6.5 3.5" id="ㄱ2"></path>
//         <path d="M9.1 0.25 V2.25 H10.35 H9.1 V4.25" id="ㅏ"></path>
//         <path
//           d="M6.75 6 C 6.75 6, 6.75 5, 7.75 5 C 7.75 5, 8.75 5, 8.75 6 C 8.75 6, 8.75 7, 7.75 7 C 7.75 7, 6.75 7, 6.75 6"
//           id="ㅇ"
//         />
//         <path
//           d="M12.25 0.75 C 12.25 0.75, 12.25 0.25, 12.75 0.25 H14.75 C 14.75 0.25, 15.25 0.25, 15.25 0.75 V 1.5 C 15.25 1.5, 15.25 2, 14.75 2 H12.75 C 12.75 2, 12.25 2, 12.25 1.5 V0.75"
//           id="ㅁ2"
//         ></path>
//         <path d="M11.6 3.55 H16 H13.8 V4.9 " id="ㅜ"></path>
//         <path
//           d="M12.1 5 V5.5 C 12.1 6.5, 12.1 6.5, 14.1 6.5 H15.4"
//           id="ㄴ"
//         ></path>
//         {/* <path
//             d="M6.25 6.5 C 6.25 6.5, 6.25 5.5, 7.25 5.5 C 7.25 5.5, 8.25 5.5, 8.25 6.5 C 8.25 6.5, 8.25 7.5, 7.25 7.5 C 7.25 7.5, 6.25 7.5, 6.25 6.5"
//             id="ㅇ"
//           /> */}
//         {/* <path
//             d="M6.25 6.5 C 6.25 6.5, 6.25 5, 7.75 5 C 7.75 5, 9.25 5, 9.25 6.5 C 9.25 6.5, 9.25 8, 7.75 8 C 7.75 8, 6.25 8, 6.25 6.5"
//             id="ㅇ"
//           /> */}
//         {/* <path d="M1.25 4.5 H4" id="ㅁ"></path> */}
//         {/* <path d="M1 1 V2 C 1 3, 1 3, 3 3" id="ㄴ"></path> */}
//       </defs>
//       <use href="#ㄱ" />
//       <use href="#ㅣ" />
//       <use href="#ㅁ" />
//       <use href="#ㄱ2" />
//       <use href="#ㅏ" />
//       <use href="#ㅇ" />
//       <use href="#ㅁ2" />
//       <use href="#ㅜ" />
//       <use href="#ㄴ" />
//     </svg>
//   );
// };
