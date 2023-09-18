interface IProject {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  bulletPoints?: string[];
  tags?: string[];
  link?: string;
}
