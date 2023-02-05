export interface Resume {
  title: string;
  personnalInfos: PersonnalInfos;
  diplomas: Diploma[];
  trainings: Training[];
  companies: Company[];
  missions: Mission[];
  workedFor: WorkedFor[];
  langages: Skill[];
  methods: Skill[];
  softSkills: Skill[];
  tools: Skill[];
}
export interface PersonnalInfos {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bithDate: string;
}
export interface Diploma {
  name: string;
  date: string;
}
export interface Training {
  name: string;
  date: string;
  description: string;
}
export interface Company {
  name: string;
  date: string;
  isESN: boolean;
}
export interface Mission {
  name: string;
  description: string;
  role: string;
}
export interface WorkedFor {
  path: string;
  name: string;
}
export interface Skill {
  name: string;
  level: number;
}
