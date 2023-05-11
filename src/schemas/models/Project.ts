import { intervalToDuration } from 'date-fns';
class Project {
  id: any = '';
  category_title: string[] = [];
  category_description: string[] | null = null;
  focus_area: string[] | null = null;
  photo: string = '';
  title: string = '';
  subtitle: string = '';
  clients: string = '';
  start_date: Date = new Date();
  end_date: Date = new Date();
  thumbnail: string = '';
  is_key_highlight: boolean = false;
  description: string = '';
  project_order: number | null = null;
  created_at: Date = new Date();
  updated_at: Date = new Date();
  ongoing: boolean = false;
  project_url: string = '';
  is_international_projects: string = '';
  category: number[] | null = null;

  constructor(obj: any) {
    Object.assign(this, obj);
  }

  projectDuration(): number | undefined {
    const duration = intervalToDuration({ start: new Date(this.start_date), end: new Date(this.end_date) });
    return duration.months;
  }
}
export default Project;
