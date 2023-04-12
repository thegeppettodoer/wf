// import {fnloginWithFacebook} from "./conectarFirebase";
// console.log('dataVideos > loginWithFacebook',fnloginWithFacebook)


const dataVideos = [
  {
    id: 1,
    titulo: "Entrenamiento de cr7 fin de semana",
    descripcion:
      "CR7 entrenamiento de sus fines de semana de descanso para tener los abs.",
    videoUrl:
      "https://v.pinimg.com/videos/mc/720p/a4/b3/6f/a4b36fee212cdb73680eda057574ce6a.mp4",
    poster:
      "https://i.pinimg.com/736x/d0/3e/55/d03e55e4fc74f00021b6ac05c5e2eb4d.jpg",
    correlativoActual: 1,
    correlativoMax: 8,
    user: {
      username: "dgbtrainer",
      description: "dgb playlist para hacer ejercicio diversos",
      music: "cr7-audio",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "1.7M",
      comment: "4050",
      share: "1800",
    },
    videosWf: [
      {
        id:1,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/c0/18/79/c01879a4119e69ad52a85b56634425b5.mp4",
        poster:
          "https://i.pinimg.com/736x/83/20/b4/8320b4dc6c3d2fc259f59aa4ef202d86.jpg",
      },
      {
        id:2,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/5a/67/10/5a6710329c43ca12ffaf4b0dd694e9b1.mp4",
        poster:
          "https://i.pinimg.com/736x/5c/1c/64/5c1c64fba2f21bf1ed83776cbb074cf0.jpg",
      },
      {
        id:3,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/23/50/c4/2350c4d3b7ab1a3c192c6f46739cf7ff.mp4",
        poster:
          "https://i.pinimg.com/736x/4a/76/ca/4a76caf53ba7f703aed70e87ad104d0c.jpg",
      },
      {
        id:4,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/60/71/05/60710538a91068b38d882c83e383c197.mp4",
        poster:
          "https://i.pinimg.com/736x/71/51/39/71513902d2274a2076c564ed33bebcc6.jpg",
      },
      {
        id:5,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/31/e0/22/31e0222c402cb7ac16b30362826fbc1b.mp4",
        poster:
          "https://i.pinimg.com/736x/9c/03/28/9c03284c57ac0402e8120d10ce338f3e.jpg",
      },
      {
        id:6,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/6e/9d/9a/6e9d9a71af262cfc88f617608e7b120b.mp4",
        poster:
          "https://i.pinimg.com/736x/ba/02/07/ba0207846a147051b4f9ed886b8626f1.jpg",
      },
      {
        id:7,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/85/b6/50/85b650ccefa8928b22b3da6dda3b374c.mp4",
        poster:
          "https://i.pinimg.com/736x/76/dc/93/76dc93b1b5f14812a71cf18c0b343f62.jpg",
      },
      {
        id:8,
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/64/aa/27/64aa2724231f895f198f958678b6ccff.mp4",
        poster:
          "https://i.pinimg.com/736x/54/f1/2a/54f12a6b4718826bb7bd78d0f24ffe75.jpg",
      },
    ],
  },
  {
    id: 2,
    titulo: "Mi wf #1",
    descripcion:
      "It’s surprising how many people miss the abdominal muscles when working out. In doing so.",
    videoUrl:
      "https://v.pinimg.com/videos/720p/31/72/e0/3172e06325fe2b277c1696705ff263b9.mp4",
    poster:
      "https://i.pinimg.com/736x/39/8f/75/398f754a5099914b497e77155d3eec73.jpg",
    correlativoActual: 1,
    correlativoMax: 5,
    user: {
      username: "whinderssonnunes",
      description: "Como nasceu o passinho do TikTok",
      music: "som original",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "6.1k",
      comment: "190",
      share: "287",
    },
    videosWf: [
      {
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/09/e0/1f/09e01f06b6da8e7dacec28407a3de939.mp4",
        poster:
          "https://i.pinimg.com/736x/03/c8/d6/03c8d610e82a785ca10a4c7bd36de4d3.jpg",
      },
      {
        videoUrl:
          "https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4",
        poster:
          "https://i.pinimg.com/736x/7e/6c/0f/7e6c0f6b2194b9f9b9d6e78dbd4a1970.jpg",
      },
    ],
  },
  
  {
    id: 3,
    titulo: "Mi wf #3",
    descripcion: "THEY’RE NOT JUST THERE FOR THE 6 PACK LOOK!",
    videoUrl:
      "https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4",
    poster:
      "https://i.pinimg.com/736x/7e/6c/0f/7e6c0f6b2194b9f9b9d6e78dbd4a1970.jpg",
    correlativoActual: 1,
    correlativoMax: 10,
    user: {
      username: "usuario # 3",
      description: "Como nasceu o passinho do TikTok",
      music: "som original",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "1.1M",
      comment: "4080",
      share: "2800",
    },
    videosWf: [{}, {}],
  },
];
export default dataVideos;
