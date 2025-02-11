export interface Project {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  date: string;
  details: string[];
}

export interface CampusInvolvement {
  organization: string;
  roles: {
    title: string;
    date: string;
    details: string[];
  }[];
}
