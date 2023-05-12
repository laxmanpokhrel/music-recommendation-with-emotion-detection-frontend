import { intervalToDuration } from 'date-fns';

class Project {
  id: any = '';

  category_title: string[] = [];

  category_description: string[] | null = null;

  focus_area: string[] | null = null;

  photo = '';

  title = '';

  subtitle = '';

  clients = '';

  start_date: Date = new Date();

  end_date: Date = new Date();

  thumbnail = '';

  is_key_highlight = false;

  description = '';

  project_order: number | null = null;

  created_at: Date = new Date();

  updated_at: Date = new Date();

  ongoing = false;

  project_url = '';

  is_international_projects = '';

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
