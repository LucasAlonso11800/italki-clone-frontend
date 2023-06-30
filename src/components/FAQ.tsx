import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export default function FAQ() {
  const { Panel } = Collapse;

  return (
    <div className="py-5 mx-auto md:py-18">
      <h2 className="text-2xl text-center leading-7 font-bold mb-10">
        Frequently asked questions
      </h2>
      <div className="mx-auto" style={{ maxWidth: 744 }}>
        <Collapse
          bordered={true}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{background: 'transparent'}}
        >
          <Panel
            header={
              <span>
                How does italki work?
              </span>
            }
            key="1"
            style={{marginBottom: '16px', background: '#FFF'}}
          >
            <div
              className="ant-collapse-content ant-collapse-content-inactive"
              role="tabpanel"
            >
              <div className="ant-collapse-content-box">
                <p>
                  italki helps you achieve your language learning ambitions.
                  Find your ideal teacher and book a 1-on-1 lesson. There's no
                  subscription or rigid schedule. Learn when you want, as much
                  as you want.
                </p>
                <p>
                  If you'd prefer to learn without a teacher, you can use
                  italki's handy learning tools. Improve your vocabulary, train
                  your ear with podcasts, and put your knowledge to the test
                  with quizzes. The italki Community is always sharing new
                  content with language lovers.
                </p>
              </div>
            </div>
          </Panel>

          {/* Repeat the above structure for the remaining panels */}
          {/* Panel 2 */}
          <Panel
            header={
              <span>
                How many italki lessons a week can I take?
              </span>
            }
            key="2"
            style={{marginBottom: '16px', background: '#FFF'}}
          >
            <div
              className="ant-collapse-content ant-collapse-content-inactive"
              role="tabpanel"
            >
              <div className="ant-collapse-content-box">
                <p>
                  We don't want to limit your learning. As long as you and your
                  teacher have the time, you can take as many lessons as you
                  want.
                </p>
                <p>
                  Teachers on italki allow you to go at your own pace. If you
                  want to have a quick lesson during your lunch break, 30-minute
                  or 45-minute lessons are ideal. People looking for a longer
                  session, you can book up to 90 minutes!
                </p>
                <p>
                  We also offer lessons for impulsive learners. If you want to
                  learn a language right now, you can book an Instant Lesson and
                  start a trial lesson.
                </p>
              </div>
            </div>
          </Panel>

          {/* Panel 3 */}
          <Panel
            header={
              <span>
                Is italki worth it for learning a language?
              </span>
            }
            key="3"
            style={{marginBottom: '16px', background: '#FFF'}}
          >
            <div
              className="ant-collapse-content ant-collapse-content-inactive"
              role="tabpanel"
            >
              <div className="ant-collapse-content-box">
                <p>
                  Yes! italki offers the freedom and flexibility to learn with a
                  teacher you like, at a price you can afford, with a schedule
                  that works for you.
                </p>
                <p>
                  You aren't locked into any hard commitments. Lessons are pay
                  as you go, and teachers set their own prices. Browse a
                  marketplace of teachers with different teaching styles and
                  curriculums until you find the teacher that's right for you.
                </p>
                <p>
                  Learning doesn't always have to take place in a classroom.
                  Share posts with the Community and receive feedback from other
                  language learners. Use italki's learning tool to discover new
                  words with vocabulary sets, listen to podcasts from around the
                  world, practice with prompts, and more!
                </p>
              </div>
            </div>
          </Panel>

          {/* Panel 4 */}
          <Panel
            header={
              <span>
                How do I become a teacher on italki?
              </span>
            }
            key="4"
            style={{marginBottom: '16px', background: '#FFF'}}
          >
            <div
              className="ant-collapse-content ant-collapse-content-inactive"
              role="tabpanel"
            >
              <div className="ant-collapse-content-box">
                <p>
                  Anyone is welcome to apply to be a teacher on italki. You can
                  apply by clicking{" "}
                  <a
                    target="_blank"
                    href="https://teach.italki.com/application"
                  >
                    here
                  </a>{" "}
                </p>
                <p>
                  There are two types of teachers on italki, community tutors
                  and professional teachers. Professional teachers have proven
                  experience teaching and the qualifications required to help
                  you learn a language efficiently.
                </p>
                <p>
                  Community tutors are passionate language-lovers who want to
                  share their knowledge with others.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
