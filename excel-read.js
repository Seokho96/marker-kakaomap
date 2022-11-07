function parseExcel(fileInfo) {
  const xlsx = require("xlsx");
  const fs = require("fs");
  const excel = xlsx.readFile(fileInfo.filename);
  const sheetName = excel.SheetNames[0];
  const firstSheet = excel.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" });

  const latlng = jsonData.map((data, index) => {
    return {
      index: index + 2,
      favSaveNm: data["거래처명"] + " " + data["코드"],
      roadName: data["주소"],
      name: data["거래처명"],
      lat: data["위도"],
      lng: data["경도"],
    };
  });

  fs.writeFile("./public/latlng.json", JSON.stringify(latlng), "utf8", () => {
    console.log("Done");
  });
}

module.exports = parseExcel;
