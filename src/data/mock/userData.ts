import { User, Challenge, Notification } from '../../shared/types/data';

export const users: User[] = [
  {
    id: 1,
    name: "田中 太郎",
    email: "tanaka@example.com",
    avatar: "https://via.placeholder.com/150/FFCC21/FFFFFF?text=T",
    age: 28,
    gender: "male",
    createdAt: "2021-01-15T10:30:00Z",
    updatedAt: "2021-05-21T15:45:00Z"
  },
  {
    id: 2,
    name: "佐藤 花子",
    email: "sato@example.com",
    avatar: "https://via.placeholder.com/150/FF9632/FFFFFF?text=S",
    age: 25,
    gender: "female",
    createdAt: "2021-02-20T14:20:00Z",
    updatedAt: "2021-05-21T12:30:00Z"
  },
  {
    id: 3,
    name: "鈴木 一郎",
    email: "suzuki@example.com",
    avatar: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=S",
    age: 32,
    gender: "male",
    createdAt: "2021-03-10T09:15:00Z",
    updatedAt: "2021-05-21T18:20:00Z"
  },
  {
    id: 4,
    name: "高橋 美咲",
    email: "takahashi@example.com",
    avatar: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=T",
    age: 29,
    gender: "female",
    createdAt: "2021-04-05T16:45:00Z",
    updatedAt: "2021-05-21T11:10:00Z"
  },
  {
    id: 5,
    name: "伊藤 健太",
    email: "ito@example.com",
    avatar: "https://via.placeholder.com/150/45B7D1/FFFFFF?text=I",
    age: 26,
    gender: "male",
    createdAt: "2021-04-18T13:30:00Z",
    updatedAt: "2021-05-21T14:25:00Z"
  },
  {
    id: 6,
    name: "渡辺 真理",
    email: "watanabe@example.com",
    avatar: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=W",
    age: 31,
    gender: "female",
    createdAt: "2021-05-01T11:20:00Z",
    updatedAt: "2021-05-21T16:40:00Z"
  },
  {
    id: 7,
    name: "山田 次郎",
    email: "yamada@example.com",
    avatar: "https://via.placeholder.com/150/FECA57/FFFFFF?text=Y",
    age: 27,
    gender: "male",
    createdAt: "2021-05-08T08:45:00Z",
    updatedAt: "2021-05-21T10:15:00Z"
  },
  {
    id: 8,
    name: "中村 さくら",
    email: "nakamura@example.com",
    avatar: "https://via.placeholder.com/150/FF9FF3/FFFFFF?text=N",
    age: 24,
    gender: "female",
    createdAt: "2021-05-15T15:10:00Z",
    updatedAt: "2021-05-21T13:50:00Z"
  }
];

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "30日間の朝活チャレンジ",
    description: "毎日朝6時に起きて、30分間の運動を行うチャレンジです。",
    image: "challenge-1.jpg",
    startDate: "2021-05-01",
    endDate: "2021-05-31",
    participants: 156,
    difficulty: "medium",
    category: "ライフスタイル",
    rewards: ["バッジ", "ポイント100pt", "証明書"]
  },
  {
    id: 2,
    title: "野菜中心の食事チャレンジ",
    description: "1週間、毎日野菜を300g以上摂取するチャレンジです。",
    image: "challenge-2.jpg",
    startDate: "2021-05-15",
    endDate: "2021-05-22",
    participants: 89,
    difficulty: "easy",
    category: "ダイエット",
    rewards: ["バッジ", "ポイント50pt"]
  },
  {
    id: 3,
    title: "10,000歩ウォーキングチャレンジ",
    description: "毎日10,000歩以上歩くことを目標としたチャレンジです。",
    image: "challenge-3.jpg",
    startDate: "2021-05-10",
    endDate: "2021-06-10",
    participants: 234,
    difficulty: "easy",
    category: "フィットネス",
    rewards: ["バッジ", "ポイント200pt", "健康レポート"]
  },
  {
    id: 4,
    title: "瞑想マインドフルネスチャレンジ",
    description: "毎日10分間の瞑想を21日間続けるチャレンジです。",
    image: "challenge-4.jpg",
    startDate: "2021-05-20",
    endDate: "2021-06-10",
    participants: 67,
    difficulty: "medium",
    category: "メンタルヘルス",
    rewards: ["バッジ", "ポイント150pt", "ガイドブック"]
  }
];

export const notifications: Notification[] = [
  {
    id: 1,
    title: "新しいチャレンジが開始されました",
    message: "30日間の朝活チャレンジが開始されました。参加してみませんか？",
    type: "info",
    read: false,
    createdAt: "2021-05-21T10:00:00Z",
    actionUrl: "/challenges/1"
  },
  {
    id: 2,
    title: "目標達成おめでとうございます！",
    message: "10,000歩ウォーキングチャレンジを完了しました。素晴らしい成果です！",
    type: "success",
    read: false,
    createdAt: "2021-05-20T18:30:00Z",
    actionUrl: "/achievements"
  },
  {
    id: 3,
    title: "新しいコラムが公開されました",
    message: "「魚を食べて頭もカラダも元気に!」のコラムが公開されました。",
    type: "info",
    read: true,
    createdAt: "2021-05-19T14:15:00Z",
    actionUrl: "/column/1"
  },
  {
    id: 4,
    title: "システムメンテナンスのお知らせ",
    message: "5月25日の午前2時から4時までシステムメンテナンスを実施します。",
    type: "warning",
    read: true,
    createdAt: "2021-05-18T09:00:00Z"
  }
];
