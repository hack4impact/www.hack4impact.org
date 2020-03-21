import React, { useState, useEffect } from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import ProjectBanner from "../../components/projects/projectBanner";
import axios from "axios";
import { Container, Row, Col, Card } from "reactstrap";

const Project = () => {
  const router = useRouter();
  const id = router.query.id;

  const [project, setProject] = useState();

  useEffect(
    () => {
      const baseUrl = process.env.baseURL || "http://localhost:8000";
      axios.get(baseUrl + "/posts/" + id).then(data => {
        const d = data.data;
        const newProject = {
          title: d.title,
          codeUrl: d.codeUrl,
          projectUrl: d.projectUrl,
          shortSummary: d.shortSummary,
          techStack: d.techStack,
          coverImageUrl: d.coverImageUrl,
          aboutProject: d.aboutProject,
          aboutClient: d.aboutClient,
          impact: d.impact,
          features: d.features,
          challenges: d.challenges,
          team: d.team,
          featureImages: d.featureImages
        };

        setProject(newProject);
      });
    },
    [id]
  );

  return (
    <div>
      <Head title="Title" />
      <Nav navType="otherNav" />
      {project && (
        <div>
          <ProjectBanner
            title={project.title}
            clientDetail={project.shortSummary}
            githubLink={project.codeUrl}
            projectLink={project.projectUrl}
          />
          <Container style={{ marginTop: "20px", marginBottom: "40px" }}>
            <Row>
              <Col md="6">
                <Card className="border-0">
                  <h5 className="card-title text-center project-detail-title">
                    Project Overview
                  </h5>
                  <div className="mt-3 img-holder">{project.aboutProject}</div>
                </Card>
              </Col>

              <Col md="6">
                <Card className="border-0">
                  <h5 className="card-title text-center project-detail-title">
                    Our Client
                  </h5>
                  <div className="mt-3 img-holder">{project.aboutClient}</div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Project;
