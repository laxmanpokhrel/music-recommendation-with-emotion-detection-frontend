class Project {
  constructor(
    public id: string,
    // public category_title: string[],
    // public category_description: string[],
    // public focus_area: string[],
    // public photo: string,
    // public title: string,
    // public subtitle: string,
    public clients: string,
    public start_date: Date,
    public end_date: Date,
    public thumbnail: string,
    public is_key_highlight: boolean,
    public description: string,
    public project_order: number,
    public created_at: Date,
    public updated_at: Date,
    public ongoing: boolean,
    public project_url: string | null,
    public is_international_projects: string,
    public category: number[],
  ) {}
}
export default Project;
