import { FoodItem, MealCategory, BodyRecord, RecordItem, ExerciseItem, ExerciseDayItem } from '../../shared/types/data';

export const mealCategories: MealCategory[] = [
  {
    id: 1,
    name: "Morning",
    icon: "/icons/icon_knife.svg",
    description: "朝食の記録",
    color: "#FFCC21"
  },
  {
    id: 2,
    name: "Lunch",
    icon: "/icons/icon_knife.svg",
    description: "昼食の記録",
    color: "#FF9632"
  },
  {
    id: 3,
    name: "Dinner",
    icon: "/icons/icon_knife.svg",
    description: "夕食の記録",
    color: "#FF6B6B"
  },
  {
    id: 4,
    name: "Snack",
    icon: "/icons/icon_cup.svg",
    description: "間食の記録",
    color: "#4ECDC4"
  }
];

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "サンドイッチ",
    image: "/images/m01.jpg",
    category: "morning",
    calories: 350,
    date: "2021.05.21",
    description: "05.21.Morning"
  },
  {
    id: 2,
    name: "弁当",
    image: "/images/m02.jpg",
    category: "lunch",
    calories: 650,
    date: "2021.05.21",
    description: "05.21.Morning"
  },
  {
    id: 3,
    name: "和食ディナー",
    image: "/images/m01.jpg",
    category: "dinner",
    calories: 800,
    date: "2021.05.21",
    description: "05.21.Morning"
  },
  {
    id: 4,
    name: "ラーメン",
    image: "/images/m01.jpg",
    category: "snack",
    calories: 550,
    date: "2021.05.21",
    description: "05.21.Morning"
  },
  {
    id: 5,
    name: "サンドイッチ",
    image: "/images/m01.jpg",
    category: "morning",
    calories: 320,
    date: "2021.05.20",
    description: "05.21.Morning"
  },
  {
    id: 6,
    name: "ホットドッグとサラダ",
    image: "/images/m02.jpg",
    category: "lunch",
    calories: 480,
    date: "2021.05.20",
    description: "05.21.Morning"
  },
  {
    id: 7,
    name: "グリルチキン",
    image: "/images/m01.jpg",
    category: "dinner",
    calories: 720,
    date: "2021.05.20",
    description: "05.21.Morning"
  },
  {
    id: 8,
    name: "デザート",
    image: "/images/m02.jpg",
    category: "snack",
    calories: 280,
    date: "2021.05.21",
    description: "05.21.Morning"
  }
];

export const bodyRecords: BodyRecord[] = [
  {
    id: 1,
    date: "2021-05-21",
    weight: 65.2,
    bodyFat: 18.5,
    muscle: 35.8,
    water: 55.2
  },
  {
    id: 2,
    date: "2021-05-20",
    weight: 65.5,
    bodyFat: 18.8,
    muscle: 35.5,
    water: 54.9
  },
  {
    id: 3,
    date: "2021-05-19",
    weight: 65.8,
    bodyFat: 19.1,
    muscle: 35.2,
    water: 54.6
  },
  {
    id: 4,
    date: "2021-05-18",
    weight: 66.0,
    bodyFat: 19.3,
    muscle: 35.0,
    water: 54.4
  },
  {
    id: 5,
    date: "2021-05-17",
    weight: 66.2,
    bodyFat: 19.5,
    muscle: 34.8,
    water: 54.2
  }
];

export const myRecommendData = [
  {
    id: 1,
    title: "RECOMMENDED COLUMN",
    subtitle: "オススメ",
    image: "MyRecommend-1.jpg",
    description: "コラム記事をおすすめ"
  },
  {
    id: 2,
    title: "RECOMMENDED DIET",
    subtitle: "ダイエット",
    image: "MyRecommend-2.jpg",
    description: "ダイエット情報をおすすめ"
  },
  {
    id: 3,
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
    image: "MyRecommend-3.jpg",
    description: "美容情報をおすすめ"
  }
];

