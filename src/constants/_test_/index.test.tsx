import { IDropDownData, IProjectData } from '@Schemas/interfaces';

export const BarchartTestData = [
  { label: 'Label 1', valueMale: 10, valueFemale: 8 },
  { label: 'Label 2', valueMale: 20, valueFemale: 12 },
  { label: 'Label 3', valueMale: 30, valueFemale: 16 },
  { label: 'Label 4', valueMale: 40, valueFemale: 20 },
];

export const BiaxialBarChartTestData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const PieChartTestData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
export const LineChartTestData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const TreeChartTestData = [
  { name: 'Spacer', size: 0 },
  {
    name: 'operator',
    children: [
      {
        name: 'distortion',
        children: [
          { name: 'BifocalDistortion', size: 4461 },
          { name: 'Distortion', size: 6314 },
          { name: 'FisheyeDistortion', size: 3444 },
        ],
      },
      { name: 'Spacer', size: 0 },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      { name: 'Spacer', size: 0 },
      { name: 'IOperator', size: 1286 },
      { name: 'Spacer', size: 0 },
      {
        name: 'label',
        children: [
          { name: 'Labeler', size: 9956 },
          { name: 'Spacer', size: 0 },
          { name: 'RadialLabeler', size: 3899 },
          { name: 'Spacer', size: 0 },
          { name: 'StackedAreaLabeler', size: 3202 },
        ],
      },
      { name: 'Spacer', size: 0 },
    ],
  },
];

export const budgetList = [
  {
    id: 1,
    budgetIcon: 'handshake',
    budgetName: 'Commitment',
    amount: 12312123000,
  },
  {
    id: 2,
    budgetIcon: 'paid',
    budgetName: 'Disbursement',
    amount: 112312000,
  },
  {
    id: 3,
    budgetIcon: 'payments',
    budgetName: 'Expenditure',
    amount: 987900000000,
  },
];

export const comboboxTestData: IDropDownData[] = [
  {
    id: 1,
    label: 'Next.js',
    value: 'next.js',
  },
  {
    id: 2,
    label: 'SvelteKit',
    value: 'sveltekit',
  },
  {
    id: 3,
    label: 'Nuxt.js',
    value: 'nuxt.js',
  },
  {
    id: 4,
    label: 'Remix',
    value: 'remix',
  },
  {
    id: 5,
    label: 'Astro',
    value: 'astro',
  },
];

export const projectTestData: IProjectData[] = [
  {
    id: 1,
    projectId: 'ID-46',
    name: 'Disaster Resilience of School Project',
    sector: 'Earthquake Reconstruction',
    donar: ['Asian Development Bank', 'Clean Energy Fund'],
    executingAgency: 'Nepal Electricity Authority',
    commitment: 'US$ 342,000',
    status: 'Ongoing',
  },
  {
    id: 2,
    projectId: 'ID-46',
    name: 'Disaster Resilience of School Project',
    sector: 'Earthquake Reconstruction',
    donar: ['Asian Development Bank', 'Clean Energy Fund'],
    executingAgency: 'Nepal Electricity Authority',
    commitment: 'US$ 342,000',
    status: 'Ongoing',
  },
  {
    id: 3,
    projectId: 'ID-46',
    name: 'Disaster Resilience of School Project',
    sector: 'Earthquake Reconstruction',
    donar: ['Asian Development Bank', 'Clean Energy Fund'],
    executingAgency: 'Nepal Electricity Authority',
    commitment: 'US$ 342,000',
    status: 'Ongoing',
  },
  {
    id: 4,
    projectId: 'ID-46',
    name: 'South Asia Sub Regional Economic Cooperation Power System Project Expansion Project (SASEC)',
    sector: 'Earthquake Reconstruction in nepal',
    donar: ['Asian Development Bank', 'Clean Energy Fund'],
    executingAgency: 'Nepal Electricity Authority',
    commitment: 'US$ 342,000',
    status: 'Completed',
  },
  {
    id: 5,
    projectId: 'ID-46',
    name: 'South Asia Sub Regional Economic Cooperation Power System Project Expansion Project (SASEC)',
    sector: 'Earthquake Reconstruction of nepal',
    donar: ['Asian Development Bank', 'Clean Energy Fund'],
    executingAgency: 'Nepal Electricity Authority of nepal',
    commitment: 'US$ 342,000',
    status: 'Ongoing',
  },
  {
    id: 6,
    projectId: 'ID-46',
    name: 'Disaster Resilience of School Project',
    sector: 'Earthquake Reconstruction',
    donar: ['Asian Development Bank', 'European Investment Bank', 'Norway'],
    executingAgency: 'Nepal Electricity Authority',
    commitment: 'US$ 342,000',
    status: 'Completed',
  },
];
