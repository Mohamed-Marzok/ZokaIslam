export interface IZakr {
  category: string;
  content: string;
  count: string;
  description: string;
  reference: string;
}

export interface IAZkar {
  "أدعية الأنبياء": IZakr[];
  "أدعية قرآنية": IZakr[];
  "أذكار الاستيقاظ": IZakr[];
  "أذكار الصباح": IZakr[];
  "أذكار المساء": IZakr[];
  "أذكار النوم": IZakr[];
  "أذكار بعد السلام من الصلاة المفروضة": IZakr[];
  تسابيح: IZakr[];
}

export interface ILocation {
  countryCode: string;
  city: string;
}
export interface IPrayerTimes {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    Firstthird: string;
    Lastthird: string;
  };
  date: {
    readable: string;
    timestamp: string;
    hijri: {
      date: string;
      format: string;
      day: string;
      weekday: {
        en: string;
        ar: string;
      };
      month: {
        number: number;
        en: string;
        ar: string;
      };
      year: string;
      designation: {
        abbreviated: string;
        expanded: string;
      };
      holidays: string[];
    };
  };
}
