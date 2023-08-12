import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/utils/projectsUtils";
import { BsFillPlayFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

const ProjectsContent = () => {
  return (
    <>
      <SectionTitle title="Personal Projects" />
      <div className="flex w-full flex-wrap gap-x-4 gap-y-10">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="group relative flex h-auto w-full flex-col gap-6 rounded-md bg-slate-950/60 px-4 py-10 shadow-lg shadow-slate-900 md:w-[48%] lg:w-[32%]"
            >
              <h3 className="text-center text-xl font-semibold text-primary">
                {project.title}
              </h3>
              <p className="text-center text-xs font-medium text-primary md:text-sm">
                {project.description}
              </p>
              <div className="flex flex-row flex-wrap justify-center gap-3">
                {project.iconsList.map((iconItem, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 rounded-md"
                    >
                      {iconItem.icon}
                      <span className="text-xs text-primary md:text-sm">
                        {iconItem.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="absolute right-0 top-2 hidden h-auto w-[100px] flex-row justify-evenly gap-3 rounded-bl-md rounded-tl-md border-2 border-slate-600 bg-primary px-3 py-1 group-hover:flex">
                <a
                  href={project.github_url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <SiGithub size={25} />
                </a>
                <a
                  href={project.demo_url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <BsFillPlayFill size={25} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsContent;
