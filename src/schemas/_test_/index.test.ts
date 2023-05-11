type ProjectInput = Required<Project> & Record<string, never>;
class Project {
  id: string = '';
  category_title: string[] | null = null;
  category_description: string[] | null = null;
  focus_area: string[] | null = null;
  photo: string | null = null;
  title: string | null = null;
  subtitle: string | null = null;
  clients: string | null = null;
  start_date: Date | null = null;
  end_date: Date | null = null;
  thumbnail: string | null = null;
  is_key_highlight: boolean = false;
  description: string | null = null;
  project_order: number | null = null;
  created_at: Date | null = null;
  updated_at: Date | null = null;
  ongoing: boolean = false;
  project_url: string | null = null;
  is_international_projects: string | null = null;
  category: number[] | null = null;

  constructor(obj: ProjectInput) {
    Object.assign(this, obj);
  }

  getDate() {
    return this.id;
  }
}
export default Project;
