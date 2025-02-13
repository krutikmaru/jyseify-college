import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import { usePlaylists } from "../../contexts/PlaylistsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatePlaylist from "./CreatePlaylist";

const Playlists = () => {
  const { selectedMenubarItemId, setSelectedMenubarItemId } =
    useApplicationManager();
  const { playlists } = usePlaylists();

  return (
    <div className="mt-5 border-b-[1px] border-black-ultra-light pb-5">
      <h1 className="mb-3 text-xs font-bold text-gray-500">YOUR PLAYLISTS</h1>
      <CreatePlaylist />
      <AnimatePresence mode="wait">
        {playlists.map((item) => {
          const itemVariants = {
            hidden: { opacity: 0, x: -10 * item.id },
            visible: { opacity: 1, x: 0 },
          };
          const itemTransition = {
            duration: 0.4,
            ease: "easeOut",
          };

          let itemTailwind =
            "w-full h-10 mb-3 text-gray-300 overflow-hidden flex justify-center items-center cursor-pointer relative border-l-4 border-transparent";
          let iconTailwind =
            "h-full w-[20%] text-xs flex justify-center items-center " +
            item.iconColor;
          if (item.id === selectedMenubarItemId) {
            itemTailwind =
              "w-full h-10 mb-3 text-gray-300 overflow-hidden flex justify-center items-center cursor-pointer relative border-l-4 border-pink-primary text-pink-secondary";
            iconTailwind =
              "h-full w-[20%] text-xs flex justify-center items-center text-pink-primary";
          }

          return (
            <motion.div
              className={itemTailwind}
              variants={itemVariants}
              transition={itemTransition}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={item.id}
              onClick={() => {
                setSelectedMenubarItemId(item.id);
              }}
            >
              <motion.div
                className={iconTailwind}
                style={{ color: item.iconColor }}
              >
                <FontAwesomeIcon icon={item.icon} flip="horizontal" />
              </motion.div>
              <motion.div className="relative h-full w-[80%] flex justify-start items-center">
                <h1>{item.title}</h1>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Playlists;
