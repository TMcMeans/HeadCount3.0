export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((schoolDistricts, school) => {
      if (!schoolDistricts[school.Location.toUpperCase()]) {
        schoolDistricts[school.Location.toUpperCase()] = {};
      } else if (schoolDistricts[school.Location.toUpperCase()]) {
        const { TimeFrame, Data } = school;
        schoolDistricts[school.Location.toUpperCase()][TimeFrame] =
          Math.round(Data * 1000) / 1000;
      }
      return schoolDistricts;
    }, []);
  }
}
