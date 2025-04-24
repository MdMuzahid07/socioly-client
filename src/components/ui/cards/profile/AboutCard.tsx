import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function AboutCard() {
  return (
    <Card className="mt-4 rounded-none border-none text-black shadow-none">
      <CardBody>
        <h3 className="mb-4 text-xl font-semibold">About John Doe</h3>
        <p className="mb-4">
          Full-stack developer with 7+ years of experience in building scalable web applications.
          Passionate about open source and creating tools that make developers lives easier.
        </p>
        <h4 className="mb-2 font-semibold">Skills</h4>
        <p>JavaScript, React, Node.js, Python, Docker, AWS</p>
        <h4 className="mb-2 mt-4 font-semibold">Work</h4>
        <p>Senior Developer at TechCorp (2018 - Present)</p>
        <p>Full-stack Developer at WebSolutions Inc. (2015 - 2018)</p>
        <h4 className="mb-2 mt-4 font-semibold">Education</h4>
        <p>BS in Computer Science, Tech University (2011 - 2015)</p>
      </CardBody>
    </Card>
  );
}
