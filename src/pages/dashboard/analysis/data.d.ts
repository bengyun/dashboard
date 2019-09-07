export interface IMetaData {
  device: string;
  name: string;
  type: string; /* ???^ */
  location: {
    address: string; /* n¬ */
    gps: {  /* GPS¿? */
      latitude: number;
      longitude: number;
    };
  };
  reporting: {
    updateTime: string; /* XV?? */
    batteryVoltage: number; /* ?r?? */
    pump_current: number; /* ??¬ */
    pump_status: number; /* ?ó? */
    water_level: { /* ÊM§ */
      current: number; /* OÊ */
      critical: number; /* ?}Ê */
      depth: number; /* [x */
      overflow: number; /* ?ìÊ */
      warning: number; /* x?Ê */
    };
  };
  pump_ctrl: { /* ?âÆLI?T§M§ */
    pump_number: number;
    control_channel: string;
  }
}

export interface IThing {
  id: string;
  name: string;
  key: string;
  metadata: IMetaData;
}

export interface IStationsList {
  total: number;
  offset: number;
  limit: number;
  things: IThing[];
}

export interface IStationDetailData {
  historyLevel: {
    time: string;
    mean: string;
  }[];
  histogram: {
    le: string;
    value: number;
  }[];
}

export interface IAnalysisData {
  stationsData: IStationsList;
  stationDetailData: IStationDetailData;
}
