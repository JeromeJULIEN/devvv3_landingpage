import React from "react";

import ProjectLayoutClientComponant from "./ProjectLayoutClientComponant";
import projects from "../../data/projectData";

type Props = {
  children: React.ReactNode;
  params: {
    projectName: string;
  };
};

export async function generateMetadata(props: Props) {
  const project = projects.find((p) => p.slug === props.params.projectName);
  return {
    title: `${project?.name} | devvv3 - Web3 and Blockchain freelance developer`,
    description: project?.description,
    openGraph: {
      title: `${project?.name}`,
      description: project?.description,
      type: "article",
      images: [
        {
          url: "https://www.devvv3.com/devvv3.png",
          width: 1000,
          height: 1000,
          alt: `${project?.name}`,
        },
      ],
    },
  };
}

const ProjectLayout = (props: Props) => {
  return (
    <ProjectLayoutClientComponant>
      {props.children}
    </ProjectLayoutClientComponant>
  );
};

export default ProjectLayout;
