import React, { useState, useEffect } from "react";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import ProjectBanner from "../../components/projects/projectBanner";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel
} from "reactstrap";

const items = [
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThGF8pz1WlcKu5G2A7j249G8hFqKLSetf04ZnzYAT6RbfX3qRo",
    caption: "he"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    caption: "P 2"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    caption: "P 3"
  }
];

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{}}
      >
        <center>
          <img src={item.src} />
          <CarouselCaption captionText={item.caption} />
        </center>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Head title="Title" />
      <Nav navType="otherNav" />
      {project && (
        <div>
          <ProjectBanner
            title={project.title}
            shortSummary={project.shortSummary}
            githubLink={project.codeUrl}
            projectLink={project.projectUrl}
          />
          <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
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
            <div>
              <style>
                {`.custom-tag {
              height: 400px;
              margin-left: 100px;
              margin-right: 100px;
              margin-top: 40px;
              margin-bottom: 40px;
              background: #bdc3c7;
            }`}
              </style>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="custom-tag"
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>

            <Row>
              <Col md="12">
                <h5 className="project-detail-title center mb-5"> Impact </h5>
              </Col>
            </Row>
            <Row>
              <div className="col-md-12">
                The 1st successful outcome, well within 12 months of starting,
                would be the development, and preliminary usability testing for
                BusyBooth for an Election. A 2nd successful outcome would be the
                use of BusyBooth technology to support our collaboration with
                the Bipartisan Policy Center to improve their tools for studying
                long lines at polling places. A 3rd and important successful
                outcome over a 6-12 month timeframe after introduction of
                BusyBooth would be widespread adoption of the required API
                support of election jurisdictions to enable broader usage of the
                App, which would in turn, provide more data useful for elections
                officials seeking solutions to polling place operational
                efficiency issues.
              </div>
            </Row>
          </Container>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Project;
