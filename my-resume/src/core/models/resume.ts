import { Company } from './company';
import { Diploma } from './diploma';
import { Skill } from './skill';
import { PersonnalInfos } from './personnalInfos';
import { WorkedFor } from './workedFor';
import { Training } from './training';
import { Mission } from './mission';

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
