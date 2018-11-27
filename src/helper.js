export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((schoolDistricts, school) => {
      if (!schoolDistricts[school.Location.toUpperCase()]) {
        schoolDistricts[school.Location.toUpperCase()] = {};
      }
      const { TimeFrame, Data } = school;

      if (isNaN(Data)) {
        schoolDistricts[school.Location.toUpperCase()][TimeFrame] = 0;
      } else if (!isNaN(Data)) {
        schoolDistricts[school.Location.toUpperCase()][TimeFrame] =
          Math.round(Data * 1000) / 1000;
      }

      return schoolDistricts;
    }, {});
  }

  findByName = schoolName => {
    if (!schoolName) {
      return undefined;
    }

    const name = schoolName.toUpperCase();
    if (this.stats[name]) {
      return { location: name, stats: { ...this.stats[name] } };
    }
  };
}
