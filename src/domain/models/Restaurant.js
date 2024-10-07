export class Restaurant {
  constructor(item) {
    this.branchId = item?.branchId || '';
    this.branchName = item?.branchName || '';
    this.image = item?.image | '';
    this.ratings = item?.ratings || '';
    this.isFavourite = item?.isFavourite || '';
    this.location = item?.location || '';
    this.distance = item?.distance || '';
    this.price = item?.price || '';
  }
}
