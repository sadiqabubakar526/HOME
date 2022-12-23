import React from "react"

import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Image from "next/image"
import Heading from "../src/components/Heading"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About"
        description="Front End Developer based in Bauchi State, Nigeria"
      />
      <div className="container">
        <Heading level={1}>Hey, I&apos;M SERDYQ👋</Heading>

        <div className="about">
          <div>
            <p>
              I&apos;m a Front End Developer based in{" "}
              <a
                href="https://en.m.wikipedia.org/wiki/Bauchi_State"
                target="_blank"
                rel="noreferrer"
              >
                Bauchi State 
              </a>
              , Nigeria.
            </p>

            <p>
              My coding journey started unexpectedly in my early years of my 
              Secondary school in 2014. I started making research for tutorials, Pdfs, leearning platforms e.t.c. After learning for sometime, i decided to build a basic website and I thought writing
              code was so cool. I was hooked,but i manage to create its, tho its not that beautiful, I keep learning and working on new languages and technologies.
            </p>

            <p>
              Outside of work I like to spend my time walking, reading, and making research on my laptop{" "}
              <a
                href="https://www.instagram.com/p/CA0Kd23luxl/"
                target="_blank"
                rel="noreferrer"
              >
                Shubaado (i.e The Choosen One )
              </a>
              , drinking coffee, playing Soccer, gaming and watching silicon valley.
            </p>
          </div>
          <div className="about__image-container">
            <Image
              src="/images/serdyqsirajo.jpg"
              alt="Profile Picture"
              layout="responsive"
              width={389}
              height={321}
            />
          </div>
        </div>

        <section className="tech-skills">
          <Heading level={2}>Tech Skills</Heading>
          <ul className="tech-skills__list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Gatsby</li>
            <li>CI/CD</li>
            <li>APIs</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Automated Testing</li>
            <li>Linux</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About
