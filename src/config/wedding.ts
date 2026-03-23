import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import ceremonyImg from "@/assets/ceremony.jpg";
import receptionImg from "@/assets/reception.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const weddingConfig = {
  couple: {
    bride: {
      firstName: "Diễm",
      lastName: "Nguyễn",
      fullName: "Diễm Nguyễn",
      description: "Thứ nữ",
      image: brideImg,
    },
    groom: {
      firstName: "Dương",
      lastName: "Lê",
      fullName: "Dương Lê",
      description: "Trưởng nam",
      image: groomImg,
    },
  },
  events: {
    ceremony: {
      title: "Lễ Cưới",
      date: "2025-12-12T08:00:00",
      time: "08:00",
      venue: "The Great Hall",
      address: "123 Đường Hạnh Phúc, Quận 1, TP.HCM",
      mapUrl: "https://maps.google.com",
      image: ceremonyImg,
    },
    reception: {
      title: "Tiệc Cưới",
      date: "2025-12-13T14:00:00",
      time: "14:00 - 15:00",
      venue: "Alila Resort",
      address: "456 Đường Tình Yêu, Quận 7, TP.HCM",
      mapUrl: "https://maps.google.com",
      image: receptionImg,
    },
  },
  weddingDate: "2025-12-12T08:00:00",
  guestName: "Quý Khách",
  quote: {
    text: "Được yêu thương sâu sắc bởi ai đó sẽ cho bạn sức mạnh, trong khi yêu thương ai đó sâu sắc sẽ cho bạn can đảm.",
    author: "Phước Thành",
  },
  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6],
  youtubeVideoId: "VD5aITz1iRQ",
  gift: {
    bankName: "Vietcombank",
    accountNumber: "1234567890",
    accountHolder: "NGUYEN VAN A",
    accountHolder1: "NGUYEN VAN B",
    shippingAddress: "123 Đường Hạnh Phúc, Quận 1, TP.HCM",
  },
  families: {
    bride: { family: "Gia đình Nhà gái", parents: "Ông Bà Nguyễn Văn A" },
    groom: { family: "Gia đình Nhà trai", parents: "Ông Bà Trần Văn B" },
  },
  music: "https://res.cloudinary.com/dn8ovj988/video/upload/v1774282900/YTDown.com_YouTube_mot-doi-14-Casper-_-Bon-Nghiem-feat-buit_Media_JgTZvDbaTtg_001_1080p_mnkbmb.mp3",
};
