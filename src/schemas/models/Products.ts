// import { intervalToDuration } from 'date-fns';
class Products {
  title = '';

  price = '';

  category = '';

  description = '';

  image = '';

  constructor(obj: any) {
    Object.assign(this, obj);
  }

  //   projectDuration(): number | undefined {
  //     const duration = intervalToDuration({ start: new Date(this.start_date), end: new Date(this.end_date) });
  //     return duration.months;
  //   }
}
export default Products;
