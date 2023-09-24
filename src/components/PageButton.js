import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

export default function PageButton() {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [showCard4, setShowCard4] = useState(false);
  const [showCard5, setShowCard5] = useState(false);
  const [showCard6, setShowCard6] = useState(false);

  const handleButtonClick = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowCard1(true);
        break;
      case 2:
        setShowCard2(true);
        break;
      case 3:
        setShowCard3(true);
        break;
      case 4:
        setShowCard4(true);
        break;
      case 5:
        setShowCard5(true);
        break;
      case 6:
        setShowCard6(true);
        break;
      default:
        break;
    }
  };

  const handleCloseCard = (cardNumber) => {
    switch (cardNumber) {
      case 1:
        setShowCard1(false);
        break;
      case 2:
        setShowCard2(false);
        break;
      case 3:
        setShowCard3(false);
        break;
      case 4:
        setShowCard4(false);
        break;
      case 5:
        setShowCard5(false);
        break;
      case 6:
        setShowCard6(false);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Row
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
      <Col style={{ textAlign: "center", marginTop: "20px" }}>
  <h1 style={{ fontSize: "70px", color: "navy" }}>Welcome User</h1>
</Col>

      </Row>
      <Row
        style={{
          marginBottom: "30px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(1)}
            style={{
              padding: "10px 20px",
              backgroundColor: "green", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "20px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Information And Resource
          </Button>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(2)}
            style={{
              padding: "10px 20px",
              backgroundColor: "purple", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "20px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Self-help Tools
          </Button>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(3)}
            style={{
              padding: "10px 20px",
              backgroundColor: "green", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "20px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Digital Detox Tips
          </Button>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: "30px",
          textAlign: "center",
          marginTop: "70px",
        }}
      >
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(4)}
            style={{
              padding: "10px 20px",
              backgroundColor: "orange", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "24px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Success Stories
          </Button>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(5)}
            style={{
              padding: "10px 20px",
              backgroundColor: "green", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "24px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Blog and News
          </Button>
        </Col>
        <Col md={4}>
          <Button
            variant="primary"
            onClick={() => handleButtonClick(6)}
            style={{
              padding: "10px 20px",
              backgroundColor: "orange", // Change the background color
              width: "100%",
              height: "250px",
              fontSize: "20px", // Increase the font size
              color: "white", // Text color
            }}
          >
            Online Courses
          </Button>
        </Col>
      </Row>

      {showCard1 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Information And Resource</Card.Title>
            </Card.Header>
            <Card.Body
  style={{
    fontFamily: "Arial, sans-serif",
    color: "darkslategray",
    overflowY: "auto",
    maxHeight: "500px",
  }}
>
  {/* Add your menu items or content here */}
  <div style={{ color: "darkslategray" }}>
    <p>
      Mental health and well-being are crucial aspects of overall health and
      life satisfaction. Here are some resources and strategies to help you
      improve and maintain your mental health:
    </p>
    <ol>
      <li style={{ color: "teal" }}>
        <p>
          <strong>Seek Professional Help:</strong> If you're struggling with
          mental health issues, consider consulting a mental health
          professional such as a therapist, counselor, or psychiatrist. They can
          provide you with the necessary guidance and treatment options.
        </p>
      </li>
      <li style={{ color: "purple" }}>
        <p>
          <strong>Talk to Someone:</strong> Sometimes, just talking to a trusted
          friend or family member can be incredibly helpful. Sharing your
          thoughts and feelings can provide relief and support.
        </p>
      </li>
      <li style={{ color: "green" }}>
        <p>
          <strong>Practice Self-Care:</strong> Prioritize self-care activities
          that promote relaxation and stress reduction, such as meditation,
          mindfulness, yoga, or deep breathing exercises.
        </p>
      </li>
      <li style={{ color: "blue" }}>
        <p>
          <strong>Exercise Regularly:</strong> Physical activity is linked to
          improved mood and reduced stress. Aim for at least 30 minutes of
          exercise most days of the week.
        </p>
      </li>
      <li style={{ color: "orange" }}>
        <p>
          <strong>Maintain a Healthy Diet:</strong> A balanced diet with plenty
          of fruits, vegetables, and whole grains can positively impact your mood
          and overall well-being.
        </p>
      </li>
      <li style={{ color: "red" }}>
        <p>
          <strong>Get Adequate Sleep:</strong> Aim for 7-9 hours of quality
          sleep per night. Lack of sleep can negatively affect your mental
          health.
        </p>
      </li>
      <li style={{ color: "indigo" }}>
        <p>
          <strong>Manage Stress:</strong> Identify stressors in your life and
          find healthy ways to cope with them, such as time management, setting
          boundaries, or relaxation techniques.
        </p>
      </li>
      <li style={{ color: "brown" }}>
        <p>
          <strong>Stay Connected:</strong> Maintain social connections with
          friends and loved ones. Social support is crucial for mental
          well-being.
        </p>
      </li>
      <li style={{ color: "magenta" }}>
        <p>
          <strong>Set Realistic Goals:</strong> Break down your goals into
          smaller, achievable steps. This can boost your sense of accomplishment
          and self-esteem.
        </p>
      </li>
      <li style={{ color: "navy" }}>
        <p>
          <strong>Limit Substance Use:</strong> Excessive alcohol or drug use
          can negatively impact mental health. Seek help if you're struggling
          with substance abuse.
        </p>
      </li>
      <li style={{ color: "olive" }}>
        <p>
          <strong>Engage in Hobbies:</strong> Pursue activities you enjoy and
          that give you a sense of purpose and fulfillment.
        </p>
      </li>
    </ol>
    <p>
      Remember that mental health is a journey, and it's essential to be patient
      with yourself. If you or someone you know is in immediate danger or
      experiencing a mental health crisis, please seek professional help or
      contact emergency services immediately. Your mental health matters, and
      there are resources and support available to help you navigate any
      challenges you may face.
    </p>
  </div>
</Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(1)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}

      {showCard2 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Self-help Tools</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                fontFamily: "Arial, sans-serif",
                color: "darkslategray",
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              <ul>
                <li style={{ color: "blue" }}>
                  <strong>Journaling:</strong>
                  <p>
                    Keeping a journal can help you process your thoughts and
                    emotions. Write down your feelings, concerns, and goals. It
                    can provide clarity and help you track your progress.
                  </p>
                </li>
                <li style={{ color: "green" }}>
                  <strong>Mindfulness Meditation:</strong>
                  <p>
                    Mindfulness practices can reduce stress and improve overall
                    mental well-being. Apps like Headspace, Calm, and Insight
                    Timer offer guided mindfulness meditation sessions.
                  </p>
                </li>
                <li style={{ color: "purple" }}>
                  <strong>Cognitive-Behavioral Techniques (CBT):</strong>
                  <p>
                    CBT is a therapeutic approach that helps you identify and
                    challenge negative thought patterns. You can find self-help
                    CBT workbooks and resources online or consult a therapist
                    for guidance.
                  </p>
                </li>
                <li style={{ color: "orange" }}>
                  <strong>Self-Help Books:</strong>
                  <p>
                    There are numerous self-help books that cover various mental
                    health topics, such as anxiety, depression, and self-esteem.
                    Some popular authors include Brené Brown, Eckhart Tolle, and
                    Jon Kabat-Zinn.
                  </p>
                </li>
                <li style={{ color: "red" }}>
                  <strong>Online Therapy and Counseling:</strong>
                  <p>
                    Platforms like BetterHelp and Talkspace offer online therapy
                    with licensed professionals. They can provide support and
                    strategies for managing mental health challenges.
                  </p>
                </li>
                <li style={{ color: "teal" }}>
                  <strong>Mental Health Apps:</strong>
                  <p>
                    There are many apps designed to support mental health.
                    Examples include MoodTools (for depression), Woebot (a
                    chatbot for emotional support), and Daylio (a mood and diary
                    tracker).
                  </p>
                </li>
                <li style={{ color: "brown" }}>
                  <strong>Self-Help Podcasts:</strong>
                  <p>
                    Numerous podcasts explore mental health topics and offer
                    practical advice. Examples include "The Happiness Lab," "The
                    Tony Robbins Podcast," and "The Anxiety Coaches Podcast."
                  </p>
                </li>
                <li style={{ color: "indigo" }}>
                  <strong>Breathing Exercises:</strong>
                  <p>
                    Practice deep breathing techniques to reduce stress and
                    anxiety. Try the 4-7-8 technique or simple diaphragmatic
                    breathing.
                  </p>
                </li>
                <li style={{ color: "lime" }}>
                  <strong>Gratitude Journal:</strong>
                  <p>
                    Write down things you're grateful for daily. Focusing on
                    positive aspects of your life can improve your overall
                    outlook.
                  </p>
                </li>
                <li style={{ color: "pink" }}>
                  <strong>Online Support Communities:</strong>
                  <p>
                    Participate in online forums or social media groups
                    dedicated to mental health and well-being. These communities
                    provide a sense of connection and shared experiences.
                  </p>
                </li>
                <li style={{ color: "blue" }}>
                  <strong>Physical Activity:</strong>
                  <p>
                    Regular exercise has a positive impact on mental health.
                    Find an activity you enjoy, whether it's walking, jogging,
                    dancing, or yoga, and incorporate it into your routine.
                  </p>
                </li>
                <li style={{ color: "green" }}>
                  <strong>Progressive Muscle Relaxation:</strong>
                  <p>
                    Learn relaxation techniques to reduce muscle tension and
                    promote relaxation. Guided audio recordings are available
                    online.
                  </p>
                </li>
                <li style={{ color: "purple" }}>
                  <strong>Set Realistic Goals:</strong>
                  <p>
                    Break down your goals into achievable steps. Celebrate small
                    victories along the way to boost your self-esteem and
                    motivation.
                  </p>
                </li>
                <li style={{ color: "orange" }}>
                  <strong>Time Management and Organization:</strong>
                  <p>
                    Effective time management can reduce stress. Use tools like
                    calendars, to-do lists, and time-blocking to stay organized.
                  </p>
                </li>
                <li style={{ color: "red" }}>
                  <strong>Self-Compassion:</strong>
                  <p>
                    Practice self-compassion by treating yourself with kindness
                    and understanding, especially during challenging times.
                  </p>
                </li>
                <li style={{ color: "teal" }}>
                  <strong>Limit Screen Time:</strong>
                  <p>
                    Excessive screen time, especially on social media, can
                    negatively affect mental health. Set boundaries and take
                    breaks from screens when needed.
                  </p>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(2)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}

      {showCard3 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Digital Detox Tips</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                fontFamily: "Arial, sans-serif",
                color: "darkslategray",
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              <ul>
                <li style={{ color: "blue" }}>
                  <strong>Set Clear Goals:</strong>
                  <p>
                    Determine why you want to do a digital detox. Is it to
                    reduce stress, improve focus, or increase your quality of
                    life? Having clear goals will motivate you.
                  </p>
                </li>
                <li style={{ color: "green" }}>
                  <strong>Create a Detox Plan:</strong>
                  <p>
                    Decide on the duration of your detox (e.g., a day, a
                    weekend, a week) and the specific rules you'll follow (e.g.,
                    no social media, limited screen time, no emails after a
                    certain hour).
                  </p>
                </li>
                <li style={{ color: "purple" }}>
                  <strong>Inform Others:</strong>
                  <p>
                    Let friends, family, and colleagues know about your digital
                    detox plan so they can support your efforts and understand
                    any delays in your response to messages.
                  </p>
                </li>
                <li style={{ color: "orange" }}>
                  <strong>Schedule Tech-Free Time:</strong>
                  <p>
                    Designate specific times of the day or week as tech-free.
                    Use this time to engage in other activities, such as
                    reading, outdoor walks, or spending quality time with loved
                    ones.
                  </p>
                </li>
                <li style={{ color: "red" }}>
                  <strong>Remove Temptations:</strong>
                  <p>
                    Delete or temporarily deactivate distracting apps and
                    notifications from your devices. Consider using website
                    blockers or app limit features to restrict access during
                    your detox.
                  </p>
                </li>
                <li style={{ color: "teal" }}>
                  <strong>Set Boundaries:</strong>
                  <p>
                    Establish boundaries for technology use. Avoid screens
                    during meals and before bedtime to improve sleep quality.
                  </p>
                </li>
                <li style={{ color: "brown" }}>
                  <strong>Substitute Activities:</strong>
                  <p>
                    Identify activities you can do during your digital detox,
                    such as hobbies, exercise, or mindfulness practices. Having
                    alternatives can make it easier to break the habit.
                  </p>
                </li>
                <li style={{ color: "indigo" }}>
                  <strong>Monitor Your Feelings:</strong>
                  <p>
                    Pay attention to how you feel during the detox. Notice any
                    improvements in mood, focus, or sleep. This positive
                    reinforcement can motivate you to continue.
                  </p>
                </li>
                <li style={{ color: "lime" }}>
                  <strong>Connect with Nature:</strong>
                  <p>
                    Spend time outdoors without your devices. Nature can have a
                    calming and rejuvenating effect on mental well-being.
                  </p>
                </li>
                <li style={{ color: "pink" }}>
                  <strong>Practice Mindfulness:</strong>
                  <p>
                    Use your detox time to practice mindfulness or meditation.
                    These practices can help you become more aware of your
                    thoughts and emotions.
                  </p>
                </li>
                <li style={{ color: "blue" }}>
                  <strong>Reconnect with People:</strong>
                  <p>
                    Use the extra time to connect with friends and family in
                    person or through phone calls and face-to-face interactions.
                  </p>
                </li>
                <li style={{ color: "green" }}>
                  <strong>Reflect and Journal:</strong>
                  <p>
                    Reflect on your digital habits and their impact on your
                    life. Journaling can help you gain insights into your
                    relationship with technology.
                  </p>
                </li>
                <li style={{ color: "purple" }}>
                  <strong>Plan Regular Detoxes:</strong>
                  <p>
                    Consider making digital detox a regular part of your
                    routine, whether it's a weekly screen-free evening or a
                    monthly weekend without devices.
                  </p>
                </li>
                <li style={{ color: "orange" }}>
                  <strong>Evaluate and Adjust:</strong>
                  <p>
                    After your digital detox, assess the benefits and challenges
                    you experienced. Adjust your approach for future detoxes
                    based on what works best for you.
                  </p>
                </li>
                <li style={{ color: "teal" }}>
                  <strong>Seek Support:</strong>
                  <p>
                    Share your digital detox experiences with friends or join
                    online communities that encourage and support screen-free
                    living.
                  </p>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(3)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}

      {showCard4 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Success Stories</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                fontFamily: "Arial, sans-serif",
                color: "darkslategray",
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              <ul>
                <li>
                  <strong>Demi Lovato:</strong>
                  <p>
                    The American singer and actress Demi Lovato has been open
                    about her struggles with bipolar disorder, addiction, and
                    eating disorders. Through therapy, medication, and a
                    commitment to self-care, Lovato has made significant
                    progress in managing her mental health. She has become an
                    advocate for mental health awareness and founded the Be
                    Vocal campaign to reduce stigma.
                  </p>
                </li>
                <li>
                  <strong>Prince Harry:</strong>
                  <p>
                    Prince Harry, a member of the British royal family, has
                    openly discussed his mental health challenges, including his
                    struggles with grief and anxiety following the death of his
                    mother, Princess Diana. He co-founded the mental health
                    initiative Heads Together to raise awareness and promote
                    mental health support.
                  </p>
                </li>
                <li>
                  <strong>Lady Gaga:</strong>
                  <p>
                    The American singer and actress Lady Gaga has been open
                    about her experiences with post-traumatic stress disorder
                    (PTSD) and depression. She uses her platform to advocate for
                    mental health awareness and self-acceptance, inspiring
                    others to seek help when needed.
                  </p>
                </li>
                <li>
                  <strong>Michael Phelps:</strong>
                  <p>
                    The Olympic swimmer Michael Phelps has spoken about his
                    battle with depression and anxiety. He sought therapy and
                    treatment, which helped him manage his mental health
                    struggles and led him to become an advocate for mental
                    health awareness.
                  </p>
                </li>
                <li>
                  <strong>JK Rowling:</strong>
                  <p>
                    The author of the Harry Potter series, JK Rowling, has
                    publicly discussed her battles with depression and suicidal
                    thoughts, especially during difficult periods of her life.
                    She emphasizes the importance of seeking help and breaking
                    the silence surrounding mental health issues.
                  </p>
                </li>
                <li>
                  <strong>Halsey:</strong>
                  <p>
                    The singer-songwriter Halsey has shared her journey with
                    bipolar disorder and has been an advocate for mental health
                    awareness, encouraging open conversations about mental
                    health struggles and seeking professional help.
                  </p>
                </li>
                <li>
                  <strong>John Green:</strong>
                  <p>
                    The author John Green, known for books like "The Fault in
                    Our Stars," has been open about his experiences with
                    obsessive-compulsive disorder (OCD) and anxiety. He has used
                    his platform to reduce stigma around mental health issues.
                  </p>
                </li>
                <li>
                  <strong>Brandon Marshall:</strong>
                  <p>
                    The former NFL wide receiver Brandon Marshall has been an
                    advocate for mental health awareness and established the
                    Brandon Marshall Foundation to promote mental health
                    education and support. He has been open about his diagnosis
                    of borderline personality disorder and his journey to
                    recovery.
                  </p>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(4)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}

      {showCard5 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Blog and News</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                fontFamily: "Arial, sans-serif",
                color: "darkslategray",
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              <ul>
                <li>
                  <strong>
                    <a
                      href="https://www.nami.org/Blogs/NAMI-Blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      NAMI Blog (National Alliance on Mental Illness)
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.psychologytoday.com/us/blogs"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Psychology Today Blog
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://themighty.com/mental-health/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      The Mighty
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.verywellmind.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Verywell Mind
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.mind.org.uk/information-support/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Mind (Mental Health Charity)
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.mhanational.org/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Mental Health America Blog
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.headspace.com/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Headspace Blog
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://adaa.org/adaa-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      ADAA Blog (Anxiety and Depression Association of America)
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://bebrainfit.com/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Be Brain Fit Blog
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.theguardian.com/society/mental-health"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      The Guardian - Mental Health Section
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.bbc.co.uk/news/health/topics/mental_health"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      BBC - Mental Health News
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.nytimes.com/section/well/mental-health"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      The New York Times - Mental Health Section
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.huffpost.com/life/topic/mental-health"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      HuffPost - Mental Health Section
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.webmd.com/mental-health/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      WebMD - Mental Health Center
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.mayoclinic.org/mental-health/expert-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      Mayo Clinic - Mental Health Blog
                    </a>
                  </strong>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(5)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}

      {showCard6 && (
        <div className="overlay">
          <Card
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              zIndex: 1000,
            }}
          >
            <Card.Header closeButton>
              <Card.Title>Online Courses</Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                fontFamily: "Arial, sans-serif",
                color: "darkslategray",
                overflowY: "auto",
                maxHeight: "400px",
              }}
            >
              <ul>
                <li>
                  <strong>
                    <a
                      href="https://www.coursera.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "green" }}
                    >
                      Coursera
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.edx.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "purple" }}
                    >
                      edX
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.futurelearn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue" }}
                    >
                      FutureLearn
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.mindfulschools.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "orange" }}
                    >
                      Mindful Schools
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.thegreatcoursesplus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "red" }}
                    >
                      The Great Courses Plus
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://centerformsc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "teal" }}
                    >
                      Mindful Self-Compassion (MSC)
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://moodgym.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "brown" }}
                    >
                      MoodGYM
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.headspace.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "indigo" }}
                    >
                      Headspace
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.7cups.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "magenta" }}
                    >
                      7 Cups
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.betterhelp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "darkorange" }}
                    >
                      BetterHelp
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.iprevail.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "royalblue" }}
                    >
                      iPrevail
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://openpathcollective.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "chocolate" }}
                    >
                      Open Path Collective
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://online.stanford.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "slategray" }}
                    >
                      Stanford Online
                    </a>
                  </strong>
                </li>
              </ul>
            </Card.Body>

            <Card.Footer>
              <Button variant="secondary" onClick={() => handleCloseCard(6)}>
                Close
              </Button>
            </Card.Footer>
          </Card>
        </div>
      )}
    </Container>
  );
}
