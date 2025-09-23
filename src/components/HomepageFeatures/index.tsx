import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Smart Decisions",
    Svg: require("@site/static/img/bulb-idea.svg").default,
    description: (
      <>
        Satisfic helps you make smarter decisions with data-driven insights and
        AI-powered recommendations tailored to your business needs.
      </>
    ),
  },
  {
    title: "Seamless Experience",
    Svg: require("@site/static/img/workflow.svg").default,
    description: (
      <>
        Enjoy a clean, intuitive interface designed to simplify complex
        workflows and keep you focused on what truly matters.
      </>
    ),
  },
  {
    title: "Powered by Innovation",
    Svg: require("@site/static/img/logic.svg").default,
    description: (
      <>
        Built with modern technology, Satisfic ensures scalability, security,
        and performance so your business grows without limits.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
