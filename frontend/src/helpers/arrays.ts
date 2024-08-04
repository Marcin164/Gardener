export const getUniqueValues = (records: any, key: string) => {
  if (!records) return [];
  const values = records.map((record: any) => record[key]);
  const uniqueValues = [...new Set(values)];
  return uniqueValues;
};

export const mergeDataWithDevices = (data: any, devices: any) => {
  if (!data || !devices) return [];

  const deviceMap = devices.reduce((map: any, device: any) => {
    map[device._id] = device;
    return map;
  }, {});

  const sensorMap = data.reduce((map: any, sensor: any) => {
    if (!map[sensor.deviceId]) {
      map[sensor.deviceId] = {};
    }
    if (sensor.type === "temperature") {
      map[sensor.deviceId].temperatureValue = sensor.value;
    } else if (sensor.type === "humidity") {
      map[sensor.deviceId].humidityValue = sensor.value;
    }
    return map;
  }, {});

  const mergedData = Object.keys(deviceMap).map((deviceId) => {
    const device = deviceMap[deviceId];
    const sensor = sensorMap[deviceId] || {};
    return {
      id: device?._id,
      name: device?.name,
      plant: device?.plant,
      city: device?.city,
      street: device?.street,
      isConnected: device?.isConnected,
      temperature: sensor.temperatureValue,
      humidity: sensor.humidityValue,
    };
  });

  return mergedData;
};

export const separateWords = (inputString: string) => {
  let cleanedString = inputString.replace(/\//g, " ");
  let wordsArray = cleanedString.split(" ");

  return wordsArray;
};
