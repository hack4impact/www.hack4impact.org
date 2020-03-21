import React from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import ProjectBanner from "../../components/projects/projectBanner";

const Project = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <Head title="Title" />
      <Nav navType="otherNav" />
      <div>
        <ProjectBanner
          title="Title"
          clientDetail="Client"
          clientLink="l"
          githubLink="l"
          projectLink="l"
        />
        <h1>Project</h1>
        <p>{id}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
