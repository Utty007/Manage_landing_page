import Styles from "./Secondframe.module.css";
import Button from "../../UI/Button";
import bgIm2 from "../../../images/bg-tablet-pattern.svg";

const Secondframe = () => {
  const subheading1 =
    "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone all the way down to the smallest of details. Never lose sight of the bigger picture again.";
  const subheading2 =
    "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the report you need to keep key stakeholders informed.";
  const subheading3 =
    "Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-in-one team productivity solution.";
  const aboutDetails = [
    {
      id: "01",
      key: 1,
      header: "Track company-wide progress",
      subheading: subheading1,
    },
    {
      id: "02",
      key: 2,
      header: "Advanced built-in reports",
      subheading: subheading2,
    },
    {
      id: "03",
      key: 3,
      header: "Everything you need in one place",
      subheading: subheading3,
    },
  ];

  console.log(aboutDetails);
  return (
    <div className={Styles.Text}>
      <div className={Styles.part1}>
        <h1>What's different about Manage?</h1>
        <p>
          Manage provides all functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className={Styles.part2}>
        {aboutDetails.map((details) => {
          return (
            <div className={Styles.innerFrame} key={details.key}>
              <div>
                <Button>{details.id}</Button>
              </div>
              <div className={Styles.ift}>
                <h2>{details.header}</h2>
                <p>{details.subheading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Secondframe;
