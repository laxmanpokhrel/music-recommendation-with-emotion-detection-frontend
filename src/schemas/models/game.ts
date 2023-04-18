class Game {
  constructor(
    public id: Number,
    public title: string,
    public thumbnail: string,
    public short_description: string,
    public game_url: string,
    public genre: string,
    public platform: string,
    public publisher: string,
    public developer: string,
    public release_data: string,
    public freetogame_profile_url: string
  ) {}
}
export default Game;
