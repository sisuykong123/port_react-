import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full h-full bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="w-full aspect-ratio:4/3 object-cover rounded-xl"
        src={bannerImg}
        alt={title}
      />
      <h3 className="px-2 pt-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-2 text-sm md:text-base leading-tight py-2 flex-1">
        {main}
      </p>
      <div className="mt-auto pt-2 px-2 flex gap-2">
        <button
          type="button"
          className="flex-1 text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </button>
        <button
          type="button"
          className="flex-1 text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
