import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faPlay,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useApplicationManager } from "../../contexts/ApplicationContext";

const SongDescription = ({ song }) => {
  const { deactivatePopupCenter } = useApplicationManager();
  return (
    <div className="w-full h-full  overflow-hidden flex justify-center items-center bg-black-secondary">
      <div className="w-1/2 h-full flex justify-center items-center relative  ">
        <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-xl bg-[#0a0a0a60]"></div>
        <div className="absolute top-0 right-0 w-4 h-full z-10 bg-gradient-to-l from-black-secondary to bg-transparent"></div>
        <img
          src={song.coverImage}
          alt={song.title}
          className="absolute w-full h-full top-0 left-0 object-fit"
        />
        <div className="w-[350px] h-[350px]  relative rounded-md overflow-hidden">
          <img
            src={song.coverImage}
            alt={song.title}
            className="absolute w-full h-full top-0 left-0 object-fit z-20"
          />
        </div>
      </div>
      <div className="w-1/2 h-full bg relative overflow-y-scroll scrollbar-hidden">
        <div
          className="absolute top-5 right-7 text-base font-bold cursor-pointer text-white-text-main"
          onClick={deactivatePopupCenter}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className="w-full min-h-full px-7 py-16 flex flex-col justify-start items-start">
          {/* Title and Artist */}
          <div>
            <h1 className="bg-gradient-to-r from-pink-primary to-purple-400 bg-clip-text text-transparent text-4xl py-2">
              {song.title}
            </h1>
            <h1 className=" mt-3 text-gray-400 text-sm font-normal">
              {song.author}
            </h1>
          </div>
          {/* Meta Data */}
          <div className="mt-10">
            <div className="text-gray-500 flex items-center justify-start">
              <FontAwesomeIcon icon={faClock} />
              <h1 className="text-sm  ml-4">{song.duration}</h1>
            </div>
            <div className="mt-4 text-gray-500 flex items-center justify-start">
              <FontAwesomeIcon icon={faCalendar} />
              <h1 className="text-sm  ml-4">{song.releaseDate}</h1>
            </div>
            <div className="mt-4 text-gray-500 flex items-center justify-start">
              <FontAwesomeIcon icon={faPlay} />
              <h1 className="text-sm  ml-4">{song.plays}</h1>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-gray-300 text-3xl mb-2">Lyrics</h1>
            <pre className="text-gray-400 font-noto text-sm">{song.lyrics}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDescription;
