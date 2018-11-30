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

  findAllMatches = school => {
    const schoolNames = Object.keys(this.stats);
    if (!school) {
      return schoolNames.map(school => {
        return { location: school, stats: this.stats[school] };
      });
    }
    const uppercaseName = school.toUpperCase();
    const matchingSchools = schoolNames.filter(school => {
      return school.includes(uppercaseName);
    });

    const matchedData = matchingSchools.reduce((matchedData, school) => {
      const dataObj = {
        location: school,
        stats: this.stats[school]
      };
      matchedData.push(dataObj);
      return matchedData;
    }, []);

    return matchedData;
  };

  findAverage = schoolName => {
    const capsSchoolName = schoolName.toUpperCase();
    const foundSchool = this.findAllMatches(capsSchoolName);
    const foundSchoolData = Object.values(foundSchool[0].stats);

    const avg =
      foundSchoolData.reduce((total, datapoint) => {
        total += datapoint;
        return total;
      }, 0) / foundSchoolData.length;
    return Math.round(avg * 1000) / 1000;
  };
}
