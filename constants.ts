
import type { Topic } from './types';

export const day1Topics: Topic[] = [
  {
    id: 'topic-1',
    title: 'The Changing Technology Landscape',
    summary: 'Technology is evolving at an unprecedented rate. This section explores the key drivers of this change, from Moore\'s Law to the network effect, and how they combine to create a dynamic and often unpredictable landscape for businesses.',
    interactive: {
      type: 'quiz',
      title: 'Test Your Knowledge',
      description: 'Check your understanding of the key drivers of technological change.',
      questions: [
        {
          question: "What concept observes that the number of transistors on a microchip doubles approximately every two years?",
          options: ["Metcalfe's Law", "Moore's Law", "Gilder's Law", "The Network Effect"],
          correctAnswerIndex: 1,
          explanation: "Moore's Law describes the exponential growth in computing power, a key driver of the changing tech landscape."
        },
        {
          question: "The idea that a network's value increases exponentially with the number of its users is known as:",
          options: ["The Butterfly Effect", "The Domino Effect", "The Network Effect", "The Snowball Effect"],
          correctAnswerIndex: 2,
          explanation: "The Network Effect (related to Metcalfe's Law) explains why platforms like social media become more powerful as more people join."
        }
      ]
    }
  },
  {
    id: 'topic-2',
    title: 'Increasing Speed of Change',
    summary: 'The pace of innovation is accelerating, shortening product lifecycles and demanding greater agility. We will discuss how organizations can move from a reactive to a proactive stance in responding to technological shifts.',
    interactive: {
      type: 'sorter',
      title: 'Agile vs. Rigid Mindsets',
      description: 'Drag and drop (or click to assign) these organizational traits into the correct category to see the difference between proactive and reactive approaches.',
      categories: [
        { id: 'agile', title: 'Agile & Proactive' },
        { id: 'rigid', title: 'Rigid & Reactive' },
      ],
      items: [
        { id: 'item-1', text: 'Embraces experimentation', category: 'agile' },
        { id: 'item-2', text: 'Fears failure', category: 'rigid' },
        { id: 'item-3', text: 'Hierarchical decision-making', category: 'rigid' },
        { id: 'item-4', text: 'Cross-functional teams', category: 'agile' },
        { id: 'item-5', text: 'Focuses on long-term planning only', category: 'rigid' },
        { id: 'item-6', text: 'Adapts to customer feedback quickly', category: 'agile' },
      ]
    }
  },
  {
    id: 'topic-3',
    title: 'Expanded Range of Possibilities',
    summary: 'With countless new tools, platforms, and methodologies emerging, the challenge is no longer finding a solution, but choosing the right one. This module introduces frameworks for evaluating and prioritizing technological opportunities.',
    interactive: {
      type: 'quiz',
      title: 'Making the Right Choice',
      description: 'Consider the following scenario and choose the best course of action.',
      questions: [
        {
          question: "A manager wants to improve team collaboration. A trendy new 'Project X' software is getting a lot of buzz. What should be their FIRST step?",
          options: [
            "Immediately purchase and roll out 'Project X' to the team.",
            "Define the team's specific collaboration problems and needs.",
            "Ask the most junior team member to research the software.",
            "Ignore the new software because the current system 'works fine'."
          ],
          correctAnswerIndex: 1,
          explanation: "Before evaluating any solution, the first step is always to clearly understand and define the problem you are trying to solve."
        }
      ]
    }
  },
  {
    id: 'topic-4',
    title: 'The Core Technologies – An Overview',
    summary: 'We will demystify the foundational technologies driving the current wave of innovation: Cloud Computing, Artificial Intelligence (AI), Big Data, and the Internet of Things (IoT). We focus on what they are and why they matter for business.',
    interactive: {
      type: 'flashcards',
      title: 'Key Technology Flashcards',
      description: 'Click on a card to flip it and learn the business definition of each core technology.',
      cards: [
        { term: 'Cloud Computing', definition: 'The delivery of on-demand computing services—from applications to storage and processing power—typically over the internet and on a pay-as-you-go basis. It provides flexibility and scalability.' },
        { term: 'Artificial Intelligence (AI)', definition: 'The simulation of human intelligence in machines, enabling them to learn, reason, problem-solve, and understand language. It powers automation and data-driven insights.' },
        { term: 'Big Data', definition: 'The large volume of data – both structured and unstructured – that inundates a business on a day-to-day basis. It\'s not the amount of data that\'s important, but what organizations do with it.' },
        { term: 'Internet of Things (IoT)', definition: 'A network of physical objects embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.' },
      ]
    }
  },
  {
    id: 'topic-5',
    title: 'Case Studies of Effective Application',
    summary: 'Theory comes to life through real-world examples. This section showcases how leading companies have successfully integrated new technologies to solve problems, create value, and gain a competitive edge.',
    interactive: {
      type: 'quiz',
      title: 'Analyze the Case Study',
      description: 'Read the mini case study and identify the core components.',
      questions: [
        {
          question: "A shipping company installed IoT sensors on its trucks to monitor location and engine health in real-time. This allowed them to optimize routes and perform predictive maintenance, reducing fuel costs by 15% and downtime by 30%. What was the 'Solution' in this case?",
          options: [
            "Reducing fuel costs by 15%",
            "High vehicle downtime",
            "Installing IoT sensors for real-time monitoring",
            "Optimizing driver schedules"
          ],
          correctAnswerIndex: 2,
          explanation: "The installation of IoT sensors was the specific technology solution implemented to address the business problems of cost and downtime."
        }
      ]
    }
  },
  {
    id: 'topic-6',
    title: 'Group Work & Discussion',
    summary: 'This is an opportunity to reflect on the day\'s content and apply it to your own context. By discussing with peers, you can gain new perspectives and identify actionable next steps for your organization.',
    interactive: {
      type: 'reflection',
      title: 'Personal Reflection',
      description: 'Consider the following questions and jot down your thoughts in the space provided. Your notes are not saved.',
      prompts: [
        'Which technology discussed today presents the biggest opportunity for my organization?',
        'What is the single biggest barrier to adopting new technology in my team or company?',
        'What is one concrete action I can take next week to be more proactive about technological change?'
      ]
    }
  },
];
