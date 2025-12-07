import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'iNSRawat.com',
    url: 'https://www.nsrawat.in',
    logo: '/static/images/experiences/insrawat-logo.png', // Placeholder, assuming user might add this later or it falls back
    start: 'Apr 2023',
    end: 'Present',
    title: 'Freelance Marketing Specialist',
    icon: 'man-technologist',
    event: 'career-insrawat',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Built data dashboards to analyze KPIs and optimize marketing performance.</li>
          <li>Improved ROI by 25% using analytical insights and performance metrics.</li>
          <li>Conducted consumer and sales data analysis to support strategic decision-making.</li>
        </ul>
      );
    },
  },
  {
    org: 'CarEager (VMG)',
    url: 'https://careager.com',
    logo: '/static/images/experiences/careager-logo.png', // Placeholder
    start: 'Mar 2023',
    end: 'Jun 2023',
    title: 'Digital Marketing Associate',
    icon: 'man-technologist',
    event: 'career-careager',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Utilized data analytics to identify growth trends, increasing sales by 25%.</li>
          <li>Created custom Excel and Google Analytics dashboards for management reporting.</li>
        </ul>
      );
    },
  },
  {
    org: 'Plants Kharido Pvt. Ltd.',
    url: '#',
    logo: '/static/images/experiences/plants-kharido-logo.png', // Placeholder
    start: 'Mar 2022',
    end: 'Mar 2023',
    title: 'Digital Marketing Manager',
    icon: 'man-technologist',
    event: 'career-plants-kharido',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Managed e-commerce analytics using Google Analytics for real-time data monitoring.</li>
          <li>Conducted user funnel and behavioral analysis to optimize customer acquisition.</li>
          <li>Achieved 6x ROI through data-driven advertising and budgeting.</li>
        </ul>
      );
    },
  },
  {
    org: 'Multiple Roles',
    url: '#',
    logo: '/static/images/experiences/multiple-roles-logo.png', // Placeholder
    start: '2017',
    end: '2021',
    title: 'Digital Marketing Executive / Intern',
    icon: 'man-technologist',
    event: 'career-multiple-roles',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Managed SEO, PPC, and analytics-driven campaigns for various clients.</li>
          <li>Built reports and dashboards to track ROI, traffic, and engagement metrics.</li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
