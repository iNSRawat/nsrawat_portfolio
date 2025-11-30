type PopularTag = {
  href: string;
  iconType: string;
  slug: string;
  title: string;
  bgColor: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/python',
    iconType: 'Python',
    slug: 'python',
    title: 'Python',
    bgColor: '#3b82f6',
  },
  {
    href: '/tags/sql',
    iconType: 'SQL',
    slug: 'sql',
    title: 'SQL',
    bgColor: '#2563eb',
  },
  {
    href: '/tags/matplotlib',
    iconType: 'Matplotlib',
    slug: 'matplotlib',
    title: 'matplotlib',
    bgColor: '#1e40af',
  },
  {
    href: '/tags/numpy',
    iconType: 'NumPy',
    slug: 'numpy',
    title: 'NumPy',
    bgColor: '#1e3a8a',
  },
  {
    href: '/tags/pandas',
    iconType: 'Pandas',
    slug: 'pandas',
    title: 'pandas',
    bgColor: '#7e22ce',
  },
  {
    href: '/tags/seaborn',
    iconType: 'Seaborn',
    slug: 'seaborn',
    title: 'Seaborn',
    bgColor: '#06b6d4',
  },
  {
    href: '/tags/plotly',
    iconType: 'Plotly',
    slug: 'plotly',
    title: 'Plotly',
    bgColor: '#0891b2',
  },
  {
    href: '/tags/database',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database',
    bgColor: '#16a34a',
  },
];

export default popularTags;
